import { useTranslation } from "react-i18next";
import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MatTable from "./MatTable";

// Edesia
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GetInquires } from "../../../redux/actions/products";

const BoxedCollapseFullWidth = ({ inquires, GetInquires }) => {
  const { t } = useTranslation("common");
  console.log({ inquires });
  useEffect(() => {
    GetInquires();
  }, []);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Cereri de Oferta de la:</h5>
          </div>

          {Object.keys(inquires) &&
            Object.keys(inquires).map((key) => (
              <Collapse title={key} className="with-shadow">
                <MatTable data={inquires[key]} />
              </Collapse>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state) => {
  console.log({state})
   return {
     inquires: state.products.inquiredDetails,
     user: state.products.user,
   };
 };
 
 export default connect(mapStateToProps, {
   GetInquires,
   // DeclineInquiry,
   // UpdateInquiry,
 })(BoxedCollapseFullWidth);
