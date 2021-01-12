import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Badge, Table } from "reactstrap";
import BasicTableData from "./BasicTableData";

const { tableHeaderData, tableRowsData } = BasicTableData();

const BasicTable = () => {
  const { t } = useTranslation("common");

  return (
    <Table responsive hover>
      <thead>
        <tr>
          {tableHeaderData.map((item) => (
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
            <td>
              <Badge color={item.status}>{item.badge}</Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BasicTable;
