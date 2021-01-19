import React, { useMemo } from "react";

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: "Image",
        accessor: "product_image",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 65,

      },
      {
        Header: "Produs",
        accessor: "title",
      },
      {
        Header: "Furnizor",
        accessor: "supplier_company.name",
      },
      {
        Header: "Rating Furnizor",
        accessor: "rating",
        disableGlobalFilter: true,
      },
      {
        Header: "Cantitate",
        accessor: "total_stock",
        disableGlobalFilter: true,
      },
      {
        Header: "Pret Unitar",
        accessor: "price",
        disableGlobalFilter: true,
      },
      {
        Header: "U.M.",
        accessor: "quantity_type",
        disableGlobalFilter: true,
      },
      {
        Header: "Cota TVA%",
        accessor: "delivery_status",
        disableGlobalFilter: true,
      },
      {
        Header: "Button",
        accessor: "button",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 160,
      },
    ],
    []
  );

  const data = [];

  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
