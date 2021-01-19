import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import MatTableFilterButton from "./MatTableFilterButton";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import {
  GetRestaurantOrder,
  MarkAsDelivery,
  MarkAsShipped,
} from "../../../redux/actions/products";

const MatTableToolbar = ({
  GetRestaurantOrder,
  MarkAsDelivery,
  selectedData,
  numSelected,
  onRequestSort,
}) => {
  const acceptOrder = async (e) => {
    e.preventDefault();
    await MarkAsDelivery({ product_id: selectedData });
    GetRestaurantOrder();
    // window.location.href = "/pages/order-history";
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
            <Button onClick={acceptOrder} className="icon" color="success">
              <p>Livrat</p>
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
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetRestaurantOrder,
  MarkAsDelivery,
  MarkAsShipped,
})(MatTableToolbar);
