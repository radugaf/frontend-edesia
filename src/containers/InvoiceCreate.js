import React from "react";
import NavBar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import { Link } from 'react-router-dom'

const InvoiceCreate = () => {
  return (
    <>
      <NavBar />

      <div className="content-wrapper">
        <SideMenu />

        <div className="wishlist-content-wrapper-column">
          <div className="card-row padding-15 page-name-wrapper">
            <span class="page-name color-orange">
              <i class="fas fa-dolly margin-right-10 color-orange"></i>Create Invoice
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

export default InvoiceCreate;
