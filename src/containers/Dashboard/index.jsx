import { Container, Row } from 'reactstrap';
import React,{useEffect} from 'react';
import { connect } from "react-redux";

import RecentOrders from '../Cart/components/RecentOrders';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import WeeklyStat from './components/WeeklyStat'
import Reservations from './components/Reservations';

import {  
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetInquires,
 } from "../../redux/actions/products";

const Dashboard = ({GetAddToCart, carts}) => {

  useEffect(() => {
    GetAddToCart();
  }, []);
  
  return (
    <Container className="dashboard">
      <Row>
        <TotalProducts />
        <TotalProfit />
        <OrdersToday />
        <Subscriptions />
      </Row>
      <Row>
        <RecentOrders carts={carts} />
        <Reservations />
        <WeeklyStat />
      </Row>
    </Container>
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
})(Dashboard);