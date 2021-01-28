import React, { useState, useEffect } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import TextField from "@material-ui/core/TextField";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";

import MatTableHead from "./MatTableHead";
import MatTableToolbar from "./MatTableToolbar";
import {
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetInquires,
} from "../../../redux/actions/products";
import { URL } from "../../../requests";

let counter = 0;

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

const MatTable = ({ carts, GetAddToCart, UpdateCart }) => {
  const data1 = (carts && carts.instant_delivery_items) || [];
  const data2 =
    carts &&
    carts.not_instant_delivery_items &&
    carts.not_instant_delivery_items.filter(
      (cart) => cart.is_enquiry_solved && cart.custom_status === "COMPLETED"
    );
  const data = [...data1, ...(data2 || [])];
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("price");
  const [selected, setSelected] = useState(new Map([]));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentQty, setCurrentQty] = React.useState(new Map([]));
  useEffect(() => {
    GetAddToCart();
  }, []);

  const UpdateQty = (e, product_item_id, price) => {
    console.log({ value: e.target.value });
    if (+e.target.value >= 1) {
      UpdateCart({
        product_id: product_item_id,
        quantity: +e.target.value,
        price,
      });
      GetAddToCart();
      toastr.success("Cart Qty Update", "Numar produse updated");
    } else {
      toastr.error("Numar produse not less than 1");
    }
  };

  const handleRequestSort = (event, property) => {
    const orderByTemp = property;
    let orderTemp = "desc";
    if (orderBy === property && order === "desc") {
      orderTemp = "asc";
    }
    setOrder(orderTemp);
    setOrderBy(orderByTemp);
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

  const handleDeleteSelected = () => {
    let copyData = [...data];
    for (let i = 0; i < [...selected].filter((el) => el[1]).length; i += 1) {
      copyData = copyData.filter((obj) => obj.id !== selected[i]);
    }
    // setData(copyData);
    setSelected(new Map([]));
  };

  const isSelected = (id) => !!selected.get(id);
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, ((data && data.length) || 0) - page * rowsPerPage);

  let QtySum = 0;
  let PriceSum = 0;
  const totalCal = (total, currentValue) => {
    return (
      +total +
      +currentValue.final_price *
        (+currentValue.quantity_by_restaurant || +currentValue.product_quantity)
    );
  };
  const total = data.reduce(totalCal, 0);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">
              🛒 Cosul de cumparaturi este de = {total} RON
            </h3>
          </div>
          <MatTableToolbar
            selectedData={[...selected]
              .filter((el) => el[1])
              .map((el) => el[0])}
            numSelected={[...selected].filter((el) => el[1]).length}
            handleDeleteSelected={handleDeleteSelected}
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
                rowCount={data && data.length}
              />
              <TableBody>
                {data &&
                  data
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((d) => {
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
                            {d.final_price} RON
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.quantity_type}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            9%
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            <TextField
                              id="standard-basic"
                              label={d.product_quantity}
                              disabled={!d.is_editable}
                              min={1}
                              max={d.product_total_stock}
                              onBlur={(e) => {
                                UpdateQty(
                                  e,
                                  d.product_item_id,
                                  d.product_price
                                );
                              }}
                            />
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.total} RON
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {/* {d.remaining_time} */}
                            {/* TODO: */}
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
            count={data && data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPageOptions={[20, 30, 50]}
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
    carts: state.products.cartsDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(MatTable);
