import React from 'react';
import {  Container, Row } from 'reactstrap';
import ProductCard from './components/ProductCard';


const ProductPage = () => (
  <Container>
    <Row>
      <ProductCard />
    </Row>
  </Container>
);

export default ProductPage;
