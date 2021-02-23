import React, { Component } from "react";
import DownIcon from "mdi-react/ChevronDownIcon";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";
import TopbarMenuLink from "./TopbarMenuLink";
import { connect } from "react-redux";
import { Logout } from "../../../redux/actions/products";

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

class TopbarProfile extends Component {
  tate = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { activeItem } = this.state;
    const { user } = this.props;
    const userType = user;
    console.log({ user });
    const is_restaurant =
      user && (user.is_restaurant_staff || user.is_restaurant_owner);
    const is_supplier =
      user && (user.is_company_staff || user.is_company_owner);
    const Type = (is_restaurant && "Restaurant") || (is_supplier && "Supplier");
    const { changeToDark, changeToLight } = this.props;
    const { collapse } = this.state;

    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">{Type}</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && (
          <button
            type="button"
            className="topbar__back"
            onClick={this.toggle}
          />
        )}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink
              title="User Profile"
              icon="user"
              path="/pages/user-profile"
            />

            <div className="topbar__menu-divider" />
            {/* <TopbarMenuLink title="Logout" icon="exit" path="/" />
            <TopbarMenuLink title="Login" icon="exit" path="/log_in" /> */}

            {user && Object.keys(user).length <= 0 && (
              <TopbarMenuLink title="Login" icon="exit" path="/log_in" />
            )}
            {user && Object.keys(user).length > 0 && (
              <TopbarMenuLink
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  window.location.href = "/log_in";
                }}
                title="Logout"
                icon="exit"
                path="/log_in"
              />
            )}
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {})(TopbarProfile);
