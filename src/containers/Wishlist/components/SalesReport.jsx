import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '../../../shared/components/Panel';

const data = [
  {
    id: 0, title: 'Today', now: '$ 298,92', plan: '$ 250 planned', label: '100%', value: 100, pink: false,
  }, {
    id: 1, title: 'This week', now: '$ 1423,01', plan: '$ 1500 planned', label: '75%', value: 75, pink: true,
  }, 
];

const SalesReport = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={6}  title={t('Analiza Cart')}>
      <div className="dashboard__sales-report">
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
