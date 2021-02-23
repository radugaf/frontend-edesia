import React from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Summary from "./components/Summary";

import { RTLProps } from "../../shared/prop-types/ReducerProps";

const ProjectSummary = ({ rtl }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Project Summary</h3>
      </Col>
    </Row>
    <Row>
      <Summary dir={rtl.direction} />
    </Row>
  </Container>
);

ProjectSummary.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(ProjectSummary);
