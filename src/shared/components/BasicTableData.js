const BasicTableData = () => {
  const header = [
    { id: 1, title: '#' },
    { id: 2, title: 'Product' },
    { id: 3, title: 'Input QTY' },
  ];

  const headerResponsive = [
    { id: 1, title: '#' },
    { id: 2, title: 'Product' },
    { id: 3, title: 'Input QTY' },
  ];

  const rows = [{
    id: 1,
    first: 'Maria',
    last: 'Morisson',

    id: 2,
    first: 'Bobby',
    last: 'Brown',

  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
