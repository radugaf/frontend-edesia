import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AnimatedLineFormWithLabels from './components/AnimatedLineFormWithLabels';
import showResults from './Show';

const FloatingLabelsForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <AnimatedLineFormWithLabels onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FloatingLabelsForm;
