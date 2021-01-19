import React, { useState, useEffect } from "react";
import { Card, CardBody, Col } from "reactstrap";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";

import MatTableHead from "./MatTableHead";
import MatTableToolbar from "./MatTableToolbar";

import { GetSupplierOrder } from "../../../redux/actions/products";
import { connect } from "react-redux";


const getSorting = (order, orderBy) => {
  if (order === "desc") {
    return (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[orderBy] > b[orderBy]) {
      return -1;
    }
    if (a[orderBy] < b[orderBy]) {
      return 1;
    }
    return 0;
  };
};

const MatTable = ({ inquires, GetSupplierOrder, data }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState(new Map([]));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentQty, setCurrentQty] = React.useState(new Map([]));

  const handleRequestSort = (event, property) => {
    const orderByTemp = property;
    let orderTemp = "desc";
    if (orderBy === property && order === "desc") {
      orderTemp = "asc";
    }
    setOrder(orderTemp);
    setOrderBy(orderByTemp);
  };

  useEffect(() => {
    GetSupplierOrder();
  }, []);

  const onChangeValueUpdate = (e, currentinq, index) => {
    const inquiry = currentinq[index];
    console.log({ inquiry, index });
    const updatedQty = +e.target.value;
    const newcurrentQty = new Map(currentQty);
    const value = newcurrentQty.get(inquiry.product_item_id);
    let qty = updatedQty;
    newcurrentQty.set(inquiry.product_item_id, {
      ...inquiry,
      updateQty: updatedQty,
    });
    console.log({ newcurrentQty });
    setCurrentQty(newcurrentQty);
  };

  const handleSelectAllClick = (event, checked) => {
    if (checked) {
      const newSelected = new Map();
      data.map((n) => newSelected.set(n.product_item_id, true));
      setSelected(newSelected);
      return;
    }
    setSelected(new Map([]));
  };

  // HandleSingle chekcbox click
  const handleClick = (event, id) => {
    const newSelected = new Map(selected);
    const value = newSelected.get(id);
    let isActive = true;
    if (value) {
      isActive = false;
    }
    newSelected.set(id, isActive);
    setSelected(newSelected);
  };

  const handleChangePage = (event, item) => {
    setPage(item);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  const isSelected = (id) => !!selected.get(id);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">Livreaza Produsele</h3>
          </div>
          <MatTableToolbar
            selectedData={currentQty}
            checkedData={[...selected].filter((el) => el[1])}
            numSelected={[...selected].filter((el) => el[1]).length}
            handleDeleteSelected={(e) => console.log(e)}
            onRequestSort={handleRequestSort}
          />
          <div className="material-table__wrap">
            <Table className="material-table">
              <MatTableHead
                numSelected={[...selected].filter((el) => el[1]).length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data
                  .sort(getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((d, index) => {
                    const select = isSelected(d.product_item_id);
                    return (
                      <TableRow
                        className="material-table__row"
                        role="checkbox"
                        onClick={(event) =>
                          handleClick(event, d.product_item_id)
                        }
                        aria-checked={select}
                        tabIndex={-1}
                        key={d.product_item_id}
                        selected={select}
                      >
                        <TableCell
                          className="material-table__cell"
                          padding="checkbox"
                        >
                          <Checkbox
                            checked={select}
                            className="material-table__checkbox"
                          />
                        </TableCell>
                        <TableCell
                            className="material-table__cell material-table__cell-right"
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            <div className="circle_square">
                              <img src={`${URL}${d.product_image_url}`}></img>
                            </div>
                          </TableCell>
                        <TableCell
                          className="material-table__cell material-table__cell-right"
                          component="th"
                          scope="row"
                          padding="none"
                        >
                          {d.product_title}
                        </TableCell>
                        
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.product_price}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                        {d.product_quantity}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.quantity_type}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.total}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            className="material-table__pagination"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
            dir="ltr"
            SelectProps={{
              inputProps: { "aria-label": "rows per page" },
              native: true,
            }}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetSupplierOrder,
  // DeclineInquiry,
  // UpdateInquiry,
})(MatTable);
