import React from 'react';
import { Container, Row } from 'reactstrap';
import RecentOrders from './components/RecentOrders';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import WeeklyStat from './components/WeeklyStat'
import Reservations from './components/Reservations';

const Dashboard = () => {
  
  return (
    <Container className="dashboard">
      <Row>
        <TotalProducts />
        <TotalProfit />
        <OrdersToday />
        <Subscriptions />
      </Row>
      <Row>
        <RecentOrders />
        <Reservations />
        <WeeklyStat />
      </Row>
    </Container>
  );
};

export default Dashboard;
