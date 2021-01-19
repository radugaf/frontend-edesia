import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MatTable from "./MatTable";

// Edesia
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GetSupplierOrder } from "../../../redux/actions/products";

const BoxedCollapseFullWidth = ({ orders, GetSupplierOrder }) => {

  console.log({ orders });
  useEffect(() => {
    GetSupplierOrder();
  }, []);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">📤 Comenzi</h3>
          </div>

          {Object.keys(orders) &&
            Object.keys(orders).map((key) => (
              <Collapse title={key} className="with-shadow">
                <MatTable data={orders[key]} />
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
    orders: state.products.supplierOrdersDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetSupplierOrder,
})(BoxedCollapseFullWidth);
