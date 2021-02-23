import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col, Progress, Button } from "reactstrap";
import Statistics from "./Statistics";
import ResponsiveTable from "./ResponsiveTable";

const Summary = ({ dir }) => (
  <Col lg={12}>
    <Card>
      <CardBody>
        <div className="project-summary">
          <div className="card__title project-summary__card-title">
            <h5 className="bold-text">Order number here</h5>
            <Button className="project-summary__btn" outline size="sm">
              Submit Order
            </Button>
          </div>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Client Name:</th>
                <td>
                  Restaurant .. haha .. ai f de la fazan ...what am I doing with
                  my life
                </td>
              </tr>
              <tr>
                <th>Due date:</th>
                <td>21/12/2021</td>
              </tr>
              <tr>
                <th>Delivery Address:</th>
                <td>Romania, Bucharest, Bd Octavian Goga 10</td>
              </tr>
              <tr>
                <th>Persoana de contact:</th>
                <td>Gogu Gogaie</td>
              </tr>
              <tr>
                <th>Telefon:</th>
                <td>0721.696.969</td>
              </tr>
              <tr>
                <th>Srisoare Electronica:</th>
                <td>ristorante@fazan.com</td>
              </tr>
            </tbody>
          </table>
          <div className="project-summary__stats">
            <div className="project-summary__stat">
              <p>
                123 <span>Products</span>
              </p>
            </div>
            <div className="project-summary__progress progress-wrap progress-wrap--middle">
              <Progress value={74}>74% completed</Progress>
            </div>
          </div>
          <hr />
          <ResponsiveTable />
        </div>
      </CardBody>
    </Card>
  </Col>
);

Summary.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default Summary;
