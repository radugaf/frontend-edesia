import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "mdi-react/FacebookIcon";
import GooglePlusIcon from "mdi-react/GooglePlusIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import { connect } from "react-redux";
import { SetToken } from "../../redux/actions/products";

const Login = ({ SetToken }) => {
  const [formDataUserName, setFormDataUserName] = useState();
  const [formDataPassword, setFormDataPassword] = useState();

  const onChange = (e) => {
    console.log({ e: e.target && e.target.name, value: e.target.value });
    if (e && e.target && e.target.name && e.target.name === "username") {
      setFormDataUserName(e.target.value);
      // ({ ...data, [e.target.name]: e.target.value }));
    } else if (e && e.target && e.target.name && e.target.name === "password") {
      setFormDataPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    SetToken({ username: formDataUserName, password: formDataPassword });
  };

  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">
              Welcome to 
              <span className="account__logo">
                {" "}Edesia 
                {/* <span className="account__logo-accent">DEV</span> */}
              </span>
            </h3>
            <h4 className="account__subhead subhead">
              Prietenul tau cel mai bun din HoReCa!
            </h4>
          </div>

          {/* Here goes the form */}
          <form className="form" onSubmit={onSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">Username</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => onChange(e)}
                  required
                  value={formDataUserName}
                ></input>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <KeyVariantIcon />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => onChange(e)}
                  required
                  value={formDataPassword}
                ></input>
              </div>
              <div className="account__forgot-password">
                <a href="/">Forgot a password?</a>
              </div>
            </div>
            <button
              className="btn btn-primary account__btn account__btn--small"
              type="submit"
            >
              Sign In
            </button>
          </form>
          {/* Here Ends the form */}

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.product,
  };
};

export default connect(mapStateToProps, { SetToken })(Login);
