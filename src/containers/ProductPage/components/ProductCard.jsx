import React, { useState } from 'react';
import {
  Card, CardBody, Col, ButtonToolbar,
} from 'reactstrap';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import images from './imgs';
import ProductTabs from './ProductTabs';


const ProductCard = () => {
  const [color, setColor] = useState('white');

  const onLike = () => {
    if (color === 'white') {
      setColor('#70bbfd');
    } else {
      setColor('white');
    }
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="product-card">
            <ProductGallery images={images} />
            <div className="product-card__info">
              <h3 className="product-card__title">Product Title</h3>
       
              <h1 className="product-card__price">product price RON</h1>
              <p className="typography-message">
                Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression
                for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved
                as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
                cultivated admiration far.
              </p>
              <form className="form product-card__form">
                <ButtonToolbar className="product-card__btn-toolbar">
                  <button className="btn btn-primary">Adauga in cos</button>
                </ButtonToolbar>
              </form>
              <ProductTabs />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
