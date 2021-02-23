const BasicTableData = () => {
  const header = [
    { id: 1, title: '#' },
    { id: 2, title: 'Nume Produs' },
    { id: 3, title: 'Cantitate' },
    { id: 4, title: 'U.M.' },
    { id: 5, title: 'Pret' },
    { id: 6, title: 'Status' },
  ];

  const headerResponsive = [
    { id: 1, title: '#' },
    { id: 2, title: 'Nume Produs' },
    { id: 3, title: 'Cantitate' },
    { id: 4, title: 'U.M.' },
    { id: 5, title: 'Pret' },
    { id: 6, title: 'Status' },
  ];

  const rows = [{
    id: 1,
    first: 'Zahar',
    last: '20',
    username: 'buc',
    status: '120 RON',
    badge: 'Pending',

  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
