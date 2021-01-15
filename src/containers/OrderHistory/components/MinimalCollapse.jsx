import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MatTable from "../../Wishlist/components/MatTable";

const MinimalCollapse = () => {
  const { t } = useTranslation("common");

  return (
    <Col lg={12}>
      <Collapse title="{date}">
        <MatTable />
      </Collapse>
    </Col>
  );
};

export default MinimalCollapse;
