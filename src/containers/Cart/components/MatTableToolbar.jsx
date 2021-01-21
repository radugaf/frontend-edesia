import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import MatTableFilterButton from './MatTableFilterButton';
import {Button} from 'reactstrap';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';

import { connect } from "react-redux";
import { GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder, } from "../../../redux/actions/products";


const MatTableToolbar = ({GetAddToCart,PlaceOrder, numSelected, onRequestSort,selectedData }) => {
  
  const AddToOrder = (e) => {
    e.preventDefault();
    const product_ids = selectedData;
    console.log({ product_ids });
    PlaceOrder({ product_id: product_ids });
    GetAddToCart();
    window.location.href="/pages/cart"
    // toastr.success("Create Order", "Order Created successfully");
  };

  return (
  <div className="material-table__toolbar-wrap">
    <Toolbar className="material-table__toolbar">
      <div>
        {numSelected > 0 && (
        <h5 className="material-table__toolbar-selected">{numSelected} <span>selected</span></h5>
        )}
      </div>
      <div>
        {numSelected > 0 ? (
          
        <Button onClick={AddToOrder} className="icon" color="primary"><p><ThumbUpOutlineIcon /> Plaseaza Comanda</p></Button>

        ) : (
          <MatTableFilterButton onRequestSort={onRequestSort} />
        )}
      </div>
    </Toolbar>
  </div>
)};

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
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(MatTableToolbar);
