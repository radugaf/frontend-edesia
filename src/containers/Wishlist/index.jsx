import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
// import RecentOrders from './components/RecentOrders';
// import SalesReport from './components/SalesReport'


const MaterialTable = () => (
  <Container>
    <Row>
      <MatTable />
      {/* <RecentOrders />
      <SalesReport /> */}
    </Row>
  </Container>
);

export default MaterialTable;


