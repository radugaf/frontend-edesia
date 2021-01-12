import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import BoxedCollapseFullWidth from './components/BoxedCollapseFullWidth';

const Collapse = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <BoxedCollapseFullWidth />
      </Row>
    </Container>
  );
};

export default Collapse;