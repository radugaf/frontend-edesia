import { useMemo } from "react";

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
        Header: "Invoice",
        accessor: "documents_link",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 65,
      },
      {
        Header: "Nr. Factura",
        accessor: "invoice_number",
      },
      {
        Header: "Furnizor",
        accessor: "supplier",
      },
      {
        Header: "Restaurant",
        accessor: "restaurant",
      },
      {
        Header: "Creation Date",
        accessor: "invoice-date",
      },
      {
        Header: "Value",
        accessor: "value",
      },
      {
        Header: "Sold",
        accessor: "sold",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      // {
      //   Header: "Produsele au fost livrate",
      //   accessor: "is_shipped_document",
      // },
      // {
      //   Header: "Produsele au fost receptionate",
      //   accessor: "is_delivered_document",
      // },
    ],
    []
  );

  const data = [];

  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
