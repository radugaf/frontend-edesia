import React, { useMemo } from "react";
import classNames from "classnames";

import PropTypes from "prop-types";

const NewOrderAmount = ({ quantity }) => {
  const amountClass = classNames({
    "dashboard__table-orders-amount": true,
    "dashboard__table-orders-amount--medium": quantity <= 100,
    "dashboard__table-orders-amount--low": quantity <= 20,
  });
  if (quantity > 150) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  }
  if (quantity > 100) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  }
  if (quantity > 50) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  }
  if (quantity > 20) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  }
  return (
    <div className={amountClass}>
      <div />
      <span>{quantity}</span>
    </div>
  );
};

NewOrderAmount.propTypes = {
  quantity: PropTypes.number,
};

NewOrderAmount.defaultProps = {
  quantity: 0,
};

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
        Footer: "Middle age:",
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
      },
    ],
    []
  );

  const getRandomDate = (start, end) =>
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toLocaleDateString();

  const data = [];

  const rows = () => {
    for (let i = 1; i < 55; i += 1) {
      data.push({
        id: i,
        title: ["Mere", "Oranges", "Banana", "Carne"][
          Math.floor(Math.random() * 4)
        ],
        supplier: ["Kaufland", "Lidl", "Metro", "Bacania X"][
          Math.floor(Math.random() * 4)
        ],
        rating: (
          <div className="dashboard__table-orders-amount">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        ),
        qty: ["Morrison", "Brown  ", "Medinberg"][
          Math.floor(Math.random() * 3)
        ],
        price: Math.min(100, Math.round(Math.random() * 30) + 20),
        um: ["Kg", "g", "L", "ml"][
          Math.floor(Math.random() * 4)
        ],
        delivery_status: ["9%", "19%", "24%", "11%"][
          Math.floor(Math.random() * 4)
        ],
        button: [
          <div class="btn btn-success btn-sm">Adauga in Cart</div>,
          <div class="btn btn-primary btn-sm">Adauga in Wishlist</div>,
        ][Math.floor(Math.random() * 2)],
      });
    }
  };

  rows();

  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
