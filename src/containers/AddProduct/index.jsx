
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import AnimatedLineFormWithLabels from './components/AnimatedLineFormWithLabels';
import showResults from './Show';

const FloatingLabelsForm = () => {

  return (
    <Container>
      <Row>
        <AnimatedLineFormWithLabels onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FloatingLabelsForm;