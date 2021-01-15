import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";

import MatTableHead from "./MatTableHead";
import MatTableToolbar from "./MatTableToolbar";

let counter = 0;

const createData = (name, desired_qty, available_qty, price, um, cota_tva, supplier) => {
  counter += 1;
  return {
    id: counter,
    name,
    desired_qty,
    available_qty,
    price,
    um,
    cota_tva,
    supplier,

    
  };
};

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

const MatTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("price");
  const [selected, setSelected] = useState(new Map([]));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([
    createData("Cupcake", "Kaufland", 3.7, "kg", "9%", 50, 1350),
    createData("Donut", "Lidl", 25.0, "g", "9%", 60, 1350),
    createData("Eclair", "Metro", 16.0, "L", "19%", 120, 1350),
    createData("Frozen yoghurt", "Kaufland", 6.0, "ml", "9%", 35, 1350),
    createData("Gingerbread", "Kaufland", 16.0, "kg", "19%", 40, 1350),
    createData("Honeycomb", "Metro", 3.2, "g", "19%", 75, 1350),
    createData("Ice cream sandwich", "Metro", 37, "L", "9%", 89, 1350),
    createData("Jelly Bean", "Lidl", 10.0, "ml", "19%", 100, 1350), 
    createData("KitKat", "Metro", 26.0, "kg", "19%", 29, 1350),
    createData("Lollipop", "Kaufland", 0.2, "g", "9%", 58, 1350),
    createData("Marshmallow", 318, 0, "L", "19%", 10, 1350),
    createData("Nougat", "Metro", 19.0, "kg", "9%", 3, 1350),
    createData("Oreo", "Lidl", 18.0, "g", "9%", 560, 1350),
  ]);

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
      data.map((n) => newSelected.set(n.id, true));
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
    setData(copyData);
    setSelected(new Map([]));
  };

  const isSelected = (id) => !!selected.get(id);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Wishlist</h5>
          </div>
          <MatTableToolbar
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
                rowCount={data.length}
              />
              <TableBody>
                {data
                  .sort(getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((d) => {
                    const select = isSelected(d.id);
                    return (
                      <TableRow
                        className="material-table__row"
                        role="checkbox"
                        onClick={(event) => handleClick(event, d.id)}
                        aria-checked={select}
                        tabIndex={-1}
                        key={d.id}
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
                          {d.name}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.desired_qty}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.available_qty}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.price}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.um}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                        <input
                            // onBlur={(e) => onChangeValueUpdate(e, data, index)}
                          />
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          QTY Inpput * Price
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

export default MatTable;
