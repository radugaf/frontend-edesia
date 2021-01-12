import React, { useMemo } from 'react';

const CreateTableData = () => {

  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Product Title',
        accessor: 'title',
      },
      {
        Header: 'Available QTY',
        accessor: 'qty',
        disableGlobalFilter: true,
      },
      {
        Header: 'Price',
        accessor: 'price',
        disableGlobalFilter: true,
      },
      {
        Header: 'U.M.',
        accessor: 'um',
        disableGlobalFilter: true,
      },
      {
        Header: 'Delivery Status',
        accessor: 'delivery_status',
        disableGlobalFilter: true,
      },
      {
        Header: 'Button',
        accessor: 'button',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];

  const rows = () => {
    for (let i = 1; i < 55; i += 1) {
      data.push({
        id: i,
        title: "maria",
        qty: ['Morrison', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        price: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
        um: Math.min(100, Math.round(Math.random() * 30) + 20),
        delivery_status: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
        button: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
      });
    }
  };

  rows();

  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
