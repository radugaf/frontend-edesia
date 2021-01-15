import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MatTable from "./MatTable";

const MinimalCollapse = ({keys,data}) => {
  const { t } = useTranslation("common");
  const datas = data && data[keys]
 
  return (
    <Col lg={12}>
    {datas && Object.keys(datas) && Object.keys(datas).map((key) => (
        <Collapse title={key}>
          <MatTable data={datas[key]} />
        </Collapse>
    ))}
    </Col>
  )
};

export default MinimalCollapse;
