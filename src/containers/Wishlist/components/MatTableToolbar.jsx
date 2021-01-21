import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "reactstrap";
import { toastr } from "react-redux-toastr";
import { connect } from "react-redux";
import {
  AddInquiry,
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
} from "../../../redux/actions/products";

import MatTableFilterButton from "./MatTableFilterButton";

const MatTableToolbar = ({
  AddInquiry,
  GetAddToCart,
  numSelected,
  handleDeleteSelected,
  onRequestSort,
  selectedData,
}) => {
  const onFormSubmit = async (e) => {
    e.preventDefault();
    await AddInquiry({ product_id: selectedData });
    toastr.success("Add Product in Inquiries", "Product added successfully");
    await GetAddToCart();
    window.location.href = "/pages/wishlist";
  };

  return (
    <div className="material-table__toolbar-wrap">
      <Toolbar className="material-table__toolbar">
        <div>
          {numSelected > 0 && (
            <h5 className="material-table__toolbar-selected">
              {numSelected} <span>selected</span>
            </h5>
          )}
        </div>
        <div>
          {numSelected > 0 ? (
            <Button onClick={onFormSubmit} className="icon" color="primary">
              <p>Cere oferta</p>
            </Button>
          ) : (
            <MatTableFilterButton onRequestSort={onRequestSort} />
          )}
        </div>
      </Toolbar>
    </div>
  );
};

MatTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    carts: state.products.cartsDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  AddInquiry,
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(MatTableToolbar);
