import React from "react";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import { connect } from "react-redux";
import { SetToken } from "../../../redux/actions/products";

const Login = ({ SetToken }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    SetToken({ username, password });
  };

  return (
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
            onChange={onChange}
            required
            value={formData.username}
          />
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
            onChange={onChange}
            required
            value={formData.password}
          />
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
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.product,
  };
};

export default connect(mapStateToProps, { SetToken })(Login);
