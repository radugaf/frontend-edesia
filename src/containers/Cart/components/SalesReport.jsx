import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '../../../shared/components/Panel';

const data = [
  {
    id: 0, title: 'Nume Furnizor 1', now: 'Ok Pentru Comanda', value: 100, pink: false,
  }, {
    id: 1, title: 'Nume Furnizor 2', now: 'Rest Comanda 1423,01 RON',  value: 75, pink: true,
  }, {
    id: 2, title: 'Nume Furnizor 3', now: 'Rest Comanda 843,01 RON', value: 37, pink: true,
  }, 
];

const SalesReport = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={6}  title= '📖 Analiza Cart'>
      <div className="dashboard__sales-report">
        <h3>Total with VAT: 100 RON</h3><h5>Total without VAT: 100 RON</h5>
        <br />
        {data.map(item => (
          <div
            key={item.id}
            className={!item.pink 
              ? 'progress-wrap progress-wrap--small'
              : 'progress-wrap progress-wrap--small progress-wrap--pink'}
          >
            <p className="dashboard__sales-report-title">{item.title}</p>
            <p className="dashboard__sales-report-now">{item.now}</p>
            <p className="dashboard__sales-report-plan">{item.plan}</p>
            <p className="dashboard__sales-report-value progress__label">{item.label}</p>
            <Progress value={item.value} />
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default SalesReport;
