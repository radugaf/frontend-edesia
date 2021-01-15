import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Table } from 'reactstrap';
import Panel from '../../../shared/components/Panel';
import { connect } from "react-redux";
import {  
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
 } from "../../../redux/actions/products";
 import { URL } from "../../../requests";
 
const header = [
  { id: 0, title: '#' },
  { id: 1, title: 'Produs' },
  { id: 2, title: 'Canitate Dorita' },
  { id: 3, title: 'Furnizor' },
  { id: 4, title: 'Status' },
  { id: 5, title: 'Timer' }
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
    status: 'In Progress',
    badge: 'primary',
    timer: "05h 27m"
  },
  

  {
    id: 2,
    invoice: 'In-218778',
    customer_name: 'Kaufland',
    product: 'Pork Meat',
    quantity: '50',
    date: '2020/11/01',
    location: 'London',
    status: 'In Progress',
    badge: 'primary',
    timer: "05h 27m"
  },
  {
    id: 3,
    invoice: 'In-626268',
    customer_name: 'Lidl',
    product: 'Sheep Meat',
    quantity: '123',
    date: '2020/11/01',
    location: 'Rome',
    status: 'In Progress',
    badge: 'primary',
    timer: "05h 27m"
  },
];

const RecentOrders = ({  
  carts,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  user,
  GetInquires,
  inquires,}) => {
  const cartsData = carts && carts.not_instant_delivery_items || []

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
          {cartsData.map(item =>{
            if (
                  !item.is_enquiry_solved &&
                  item.custom_status !== "COMPLETED"
                ){
          return(
            <tr key={item.product_item_id}>
              <td>{item.product_item_id}</td>
              <td>{item.product_title}</td>
              <td>{item.quantity_by_supplier_company}</td>
              <td>
              {/* {item.customer_name} */}
              {/* TODO: */}
              </td>
              <td><Badge color={item.badge}>{item.custom_status}</Badge></td>
              <td>{item.timer}</td>
            </tr>
          )}})}
        </tbody>
      </Table>
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    // carts: state.products.cartsDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(RecentOrders);


