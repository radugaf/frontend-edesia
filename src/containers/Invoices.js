import React from "react";
import NavBar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import { Link } from 'react-router-dom'

const Invoices = () => {
  return (
    <>
      <NavBar />

      <div className="content-wrapper">
        <SideMenu />

        <div className="wishlist-content-wrapper-column">
          <div className="card-row padding-15 page-name-wrapper">
            <span class="page-name color-orange">
              <i class="fas fa-dolly margin-right-10 color-orange"></i>Invoices
            </span>
          </div>

          <table className="product-page-table margin-top-25">
            <tr>
              <th className="td-vertical-center">Select</th>
              <th className="td-vertical-center">Poza</th>

              <th className="td-vertical-center">Delete</th>
            </tr>
            <tr>
              <td className="td-vertical-center">
                <input type="checkbox"></input>
              </td>

              <td className="product-page-table-picture-data td-vertical-center">
                <img src="#"></img>
              </td>

              <td className="td-vertical-center">
                <i class="fas fa-times padding-10 color-red"></i>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <Link className="buton-cere-oferta" to='/invoice-create'>Create new Invoice</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Invoices;
