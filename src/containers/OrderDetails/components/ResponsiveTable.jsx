import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Badge, Table } from "reactstrap";
import BasicTableData from "./BasicTableData";

const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <Table responsive className="table--bordered">
            <thead>
              <tr>
                {tableHeaderResponsiveData.map((item) => (
                  <th key={item.id}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first}</td>
                  <td>{item.last}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.date}</td>
                  <td>{item.location}</td>
                  <td>
                    <Badge color={item.status_resp}>{item.badge_resp}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ResponsiveTable;
