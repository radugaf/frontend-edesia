import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Table } from 'reactstrap';
import Panel from '../../../shared/components/Panel';

const header = [
  { id: 0, title: '#' },
  { id: 1, title: 'Product Title' },
  { id: 2, title: 'Desired QTY' },
  { id: 3, title: 'Supplier' },
  { id: 4, title: 'Status' },
];

const rows = [
  
  {
    id: 1,
    invoice: 'In-254875',
    customer_name: 'Romexpo',
    product: 'Apple',
    quantity: '32',
    date: '2020/11/25',
    location: 'Tokio',
    status: 'Completed',
    badge: 'primary',
  },
  

  {
    id: 2,
    invoice: 'In-218778',
    customer_name: 'Kaufland',
    product: 'Pork Meat',
    quantity: '50',
    date: '2020/11/01',
    location: 'London',
    status: 'Completed',
    badge: 'primary',
  },
  {
    id: 3,
    invoice: 'In-626268',
    customer_name: 'Lidl',
    product: 'Sheep Meat',
    quantity: '123',
    date: '2020/11/01',
    location: 'Rome',
    status: 'Completed',
    badge: 'primary',
  },
];

const RecentOrders = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={6} title={t('Pending Inquiries')}>
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.customer_name}</td>
              <td><Badge color={item.badge}>{item.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default RecentOrders;
