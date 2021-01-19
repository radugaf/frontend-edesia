import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MinimalCollapse from "./MinimalCollapse";

// Edesia
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GetRestaurantOrder } from "../../../redux/actions/products";

const BoxedCollapseFullWidth = ({ GetRestaurantOrder, orders }) => {

  useEffect(() => {
    GetRestaurantOrder();
  }, []);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">📦 Receptie Marfa</h3>
          </div>
          {Object.keys(orders) &&
            Object.keys(orders).map((key) => (
              <Collapse title={key} className="with-shadow">
                <MinimalCollapse keys={key} data={orders} />
              </Collapse>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    carts: state.products.cartsDetails,
    orders: state.products.restaurantOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetRestaurantOrder,
})(BoxedCollapseFullWidth);
