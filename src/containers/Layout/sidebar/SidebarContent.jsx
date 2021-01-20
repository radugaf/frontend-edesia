import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToDark, changeToLight, user } = this.props;
    const userType = user;

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            icon='pie-chart'
            title="Dashboard"
            route="/pages/dashboard"
            onClick={this.hideSidebar}
          />
        </ul>

        <ul className="sidebar__block">
          <SidebarLink
          icon='home'
            title="Catalog Produse"
            route="/pages/products"
            onClick={this.hideSidebar}
          />
          <SidebarCategory title="Documente" icon="paperclip">
          <SidebarLink
              title="Procese Verbale"
              route="/pages/proces-verbal"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Facturi"
              route="/pages/invoices"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
          {userType &&
            (userType.is_company_owner || userType.is_company_staff) && (
              <>
                <SidebarLink
                  title="Cereri de Oferta"
                  route="/pages/inquiries"
                  onClick={this.hideSidebar}
                />
                <SidebarLink
                  title="📤 Comenzi"
                  route="/pages/orders"
                  onClick={this.hideSidebar}
                />
              </>
            )}
          {userType &&
            (userType.is_restaurant_owner || userType.is_restaurant_staff) && (
              <>
                <SidebarLink
                icon='cart'
                  title="Cosul meu"
                  route="/pages/cart"
                  onClick={this.hideSidebar}
                />
                <SidebarLink
                  icon='list'
                  title="Wishlist (wokring title)"
                  route="/pages/wishlist"
                  onClick={this.hideSidebar}
                />
                <SidebarLink
                icon='checkmark-circle'
                  title="Receptie Marfa"
                  route="/pages/order-history"
                  onClick={this.hideSidebar}
                />
              </>
            )}
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
