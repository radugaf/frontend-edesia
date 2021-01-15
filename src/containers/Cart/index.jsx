import React,{useEffect} from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from "react-redux";

import MatTable from './components/MatTable';
import RecentOrders from './components/RecentOrders';
import SalesReport from './components/SalesReport'
import {  
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetInquires,
 } from "../../redux/actions/products";

const MaterialTable = ({GetAddToCart,carts}) =>{

  useEffect(() => {
    GetAddToCart();
  }, []);

  return(
  <Container>
    <Row>
      <MatTable carts={carts} />
      <RecentOrders carts={carts} />
      <SalesReport carts={carts} />
    </Row>
  </Container>
)};

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
})(MaterialTable);




