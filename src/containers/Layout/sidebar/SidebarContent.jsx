import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

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
    const { changeToDark, changeToLight } = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Log In" icon="exit" route="/log_in" onClick={this.hideSidebar} />
          <SidebarCategory title="Layout" icon="layers">
            <button type="button" className="sidebar__link" onClick={changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button type="button" className="sidebar__link" onClick={changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Products" route="/pages/products" onClick={this.hideSidebar} />
            <SidebarLink title="Inquiries" route="/pages/inquiries" onClick={this.hideSidebar} />
            <SidebarLink title="Cart" route="/pages/cart" onClick={this.hideSidebar} />
            <SidebarLink title="Wishlist" route="/pages/wishlist" onClick={this.hideSidebar} />
            <SidebarLink title="Dashboard" route="/pages/dashboard" onClick={this.hideSidebar} />
            <SidebarLink title="Orders" route="/pages/orders" onClick={this.hideSidebar} />
            <SidebarLink title="Order Hsitory" route="/pages/order-history" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
