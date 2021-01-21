import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from "reactstrap";
import ReactTableBase from "../../../shared/components/table/ReactTableBase";
import {
  SupplierInvoiceFetch,
  SetToken,
  tokenConfig,
} from "../../../redux/actions/products";

import requests, { URL, BACKEND_URL } from "../../../requests";

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DataReactTable = ({ SupplierInvoiceFetch, invoices, reactTableData }) => {
  console.log({ rows: reactTableData.tableRowsData, invoices });
  const [rows, setData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isResizable, setIsResizable] = useState(true);
  const [isSortable, setIsSortable] = useState(true);
  const [withDragAndDrop, setWithDragAndDrop] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(true);
  const [withSearchEngine, setWithSearchEngine] = useState(true);

  const call = async () => {
    let userType = await axios.get(
      `${BACKEND_URL}${requests.GET_CHECK_USER_TYPE}`,
      tokenConfig()
    );
    userType = (userType && userType.data && userType.data.data) || {
      is_restaurant_owner: true,
    };
    if (userType && (userType.is_company_owner || userType.is_company_staff)) {
      SupplierInvoiceFetch();
    }
    if (
      userType &&
      (userType.is_restaurant_staff || userType.is_restaurant_owner)
    ) {
      SupplierInvoiceFetch();
    }
  };
  useEffect(() => {
    call();
  }, []);

  const updateDraggableData = (result) => {
    const items = reorder(rows, result.source.index, result.destination.index);
    setData(items);
  };
  const updateEditableData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return item;
      })
    );
  };

  const tableConfig = {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination,
    withSearchEngine,
    manualPageSize: [20, 20, 30, 40],
    placeholder: "Cauta Produs ...",
  };

  const newInvoices =
    invoices &&
    invoices.map((invoice) => {
      console.log({invoice})

      invoice["documents_link"] =<Button onClick={()=>window.open(`${URL}${invoice.document_link}`,'_blank')}>Print</Button>
      return invoice;
    });

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="react-table__wrapper">
            <div className="card__title">
              <h3 className="bold-text">Facturi</h3>
            </div>
          </div>

          <ReactTableBase
            key={
              withSearchEngine || isResizable || isEditable
                ? "modified"
                : "common"
            }
            columns={reactTableData.tableHeaderData}
            data={newInvoices}
            updateEditableData={updateEditableData}
            updateDraggableData={updateDraggableData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

DataReactTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    invoices: state.products.invoiceDetails,
    authErrors: state.products.error,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  SupplierInvoiceFetch,
  SetToken,
})(DataReactTable);
