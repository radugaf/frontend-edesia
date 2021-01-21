import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "reactstrap";
import MatTableFilterButton from "./MatTableFilterButton";

import { connect } from "react-redux";
import { GetInquires, UpdateInquiry } from "../../../redux/actions/products";

const MatTableToolbar = ({
  UpdateInquiry,
  GetInquires,
  checkedData,
  selectedData,
  numSelected,
  handleDeleteSelected,
  onRequestSort,
}) => {
  const onUpdate = (e, type) => {
    const newSelected = new Map(selectedData);
    checkedData &&
      checkedData.forEach((check) => {
        console.log({ check });
        const qty = newSelected.get(check[0]);
        console.log({ qty });
        if(qty){
          UpdateInquiry({
            product_id: qty.product_item_id,
            inquiry_id: qty.enquiry_id,
            price: qty.original_price,
            quantity:
              type === "accept" ? qty.quantity_by_restaurant : qty.updateQty,
          });
        }
      });
    GetInquires();
    // toastr.success("Accept Inquire", "Inquire Accept Successfully");
  };
  console.log({ checkedData });
  return (
    <div className="material-table__toolbar-wrap">
      <Toolbar className="material-table__toolbar">
        <div>
          {numSelected > 0 && (
            <h5 className="material-table__toolbar-selected">
              {numSelected} <span>selected</span>
            </h5>
          )}
        </div>
        <div>
          {numSelected > 0 ? (
            <Button onClick={onUpdate} className="icon" color="primary">
              <p>
                🔍 Raspunde
              </p>
            </Button>
          ) : (
            <MatTableFilterButton onRequestSort={onRequestSort} />
          )}
        </div>
      </Toolbar>
    </div>
  );
};

MatTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
  // DeclineInquiry,
  UpdateInquiry,
})(MatTableToolbar);
