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
        accessor: "document_link",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 65,
      },
      {
        Header: "Number",
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
    ],
    []
  );

  const data = [];

  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
