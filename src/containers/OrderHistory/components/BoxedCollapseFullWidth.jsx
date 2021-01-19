import { useTranslation } from "react-i18next";
import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MatTable from "./MatTable";
import MinimalCollapse from './MinimalCollapse'

// Edesia
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import { GetRestaurantOrder,MarkAsDelivery, MarkAsShipped } from "../../../redux/actions/products";
import { URL, CREDENTIALS } from "../../../requests";

const BoxedCollapseFullWidth = ({ GetRestaurantOrder,MarkAsDelivery, MarkAsShipped, orders, user }) => {
  const { t } = useTranslation("common");
  
  const userType = user;
  useEffect(() => {
    GetRestaurantOrder();
  }, []);
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">{t('📦 Receptie Marfa')}</h3>
          </div>
          {Object.keys(orders) && Object.keys(orders).map((key) => (
              <Collapse title={key} className="with-shadow">
                  <MinimalCollapse keys={key} data={orders} />
              </Collapse>
            ))
          }

        </CardBody>
      </Card>
    </Col>
  );
};
 
 
const mapStateToProps = (state) => {
  return {
    carts: state.products.cartsDetails,
    orders: state.products.restaurantOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetRestaurantOrder,
  MarkAsShipped,
})(BoxedCollapseFullWidth);


