import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import Collapse from '../../../shared/components/Collapse';
import MatTable from './MatTable';

const BoxedCollapseFullWidth = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Inquiries Page</h5>
          </div>
          <Collapse title="What is the most featured item?" className="with-shadow">
            <MatTable />
          </Collapse>
          <Collapse title="What is the most featured item?" className="with-shadow">
            <MatTable />
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BoxedCollapseFullWidth;
