import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from "axios";

import {
  Card, CardBody, Col,
} from 'reactstrap';
import ReactTableBase from '../../../shared/components/table/ReactTableBase';
// import ReactTableCustomizer from '../../../shared/components/table/components/ReactTableCustomizer';
import {  ProductFetch,
  AddToCart,
  SetToken,
  SupplierProductFetch,
  tokenConfig,
 } from "../../../redux/actions/products";

  import requests, { URL, BACKEND_URL } from "../../../requests";

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DataReactTable = ({
  ProductFetch,
  AddToCart,
  products,
  SupplierProductFetch,
  reactTableData }) => {
    // reactTableData.tableRowsData
    console.log({rows:reactTableData.tableRowsData, products})
  const [rows, setData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isResizable, setIsResizable] = useState(true);
  const [isSortable, setIsSortable] = useState(true);
  const [isDisabledDragAndDrop, setIsDisabledDragAndDrop] = useState(false);
  const [isDisabledEditable, setIsDisabledEditable] = useState(false);
  const [isDisabledResizable, setIsDisabledResizable] = useState(false);
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
      SupplierProductFetch();
    }
    if (
      userType &&
      (userType.is_restaurant_staff || userType.is_restaurant_owner)
    ) {
      ProductFetch();
    }
  };
  useEffect(() => {
    call();
  }, []);


  const onSubmit = (e, product_id) => {
    e.preventDefault();
    AddToCart({ product_id: product_id });
    // toastr.success(`Add To ${type}`, `Add To ${type} successfully added `);
  };
  const handleClickIsEditable = () => {
    if (!withDragAndDrop) setIsDisabledResizable(!isDisabledResizable);
    setIsResizable(false);
    setIsEditable(!isEditable);
  };
  const handleClickIsResizable = () => {
    setIsEditable(false);
    setWithDragAndDrop(false);
    setIsDisabledDragAndDrop(!isDisabledDragAndDrop);
    setIsDisabledEditable(!isDisabledEditable);
    setIsResizable(!isResizable);
  };
  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };
  const handleClickWithDragAndDrop = () => {
    if (!isEditable) setIsDisabledResizable(!isDisabledResizable);
    setIsResizable(false);
    setWithDragAndDrop(!withDragAndDrop);
  };
  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };
  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };
  const updateDraggableData = (result) => {
    const items = reorder(
      rows,
      result.source.index,
      result.destination.index,
    );
    setData(items);
  };
  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old => old.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...old[rowIndex],
          [columnId]: value,
        };
      }
      return item;
    }));
  };
  
  const tableConfig = {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination,
    withSearchEngine,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Cauta Produs ...'
  };

const newProducts = products && products.map((product)=>{
  let className =""
  let buttonName ="Cart"
  if(product.instant_delivery){
    className="btn btn-success btn-sm"
    buttonName="Cart" 
  }else{
    className="btn btn-primary btn-sm"
    buttonName="Wishlist"
  }
  product['button']=<div class={className} onClick={(e) => {onSubmit(e,product.id,buttonName)}}>Adauga in {buttonName}</div>
  product['product_image']=<img src={`${URL}${product.image_main}`}></img>
 
  return product
})
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="react-table__wrapper">
            <div className="card__title">
              <h3 className="bold-text">🍲 Catalog Produse</h3>
            </div>
            {/* <ReactTableCustomizer
              handleClickIsEditable={handleClickIsEditable}
              handleClickIsResizable={handleClickIsResizable}
              handleClickIsSortable={handleClickIsSortable}
              handleClickWithDragAndDrop={handleClickWithDragAndDrop}
              handleClickWithPagination={handleClickWithPagination}
              handleClickWithSearchEngine={handleClickWithSearchEngine}
              isEditable={isEditable}
              isResizable={isResizable}
              isSortable={isSortable}
              isDisabledDragAndDrop={isDisabledDragAndDrop}
              isDisabledEditable={isDisabledEditable}
              isDisabledResizable={isDisabledResizable}
              withDragAndDrop={withDragAndDrop}
              withPagination={withPagination}
              withSearchEngine={withSearchEngine}
              fullCustomizer
            /> */}
          </div>

          
          <ReactTableBase
            key={withSearchEngine || isResizable || isEditable ? 'modified' : 'common'}
            columns={reactTableData.tableHeaderData}
            data={newProducts}
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
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products.productsDetails,
    authErrors: state.products.error,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  ProductFetch,
  AddToCart,
  SetToken,
  SupplierProductFetch,
})(DataReactTable);
