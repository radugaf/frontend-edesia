/* eslint-disable react/no-children-prop */
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  children,
  select,
  type,
  multiline,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    type={type}
    error={touched && error}
    value={input.value}
    children={children}
    select={select}
    multiline={multiline}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  type: PropTypes.string,
  multiline: PropTypes.bool,
};

renderTextField.defaultProps = {
  meta: null,
  select: false,
  children: [],
  type: "text",
  multiline: false,
};

const AnimatedLineFormWithLabels = ({ handleSubmit, reset }) => {
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">Adauga produse</h3>
          </div>
          <form className="material-form" onSubmit={handleSubmit}>
            <div>
              <Field
                name="title"
                component={renderTextField}
                label="Titlu Produs"
              />
            </div>
            <div>
              <Field
                name="email"
                component={renderTextField}
                type="email"
                label="Pret"
              />
            </div>
            <div>
              <Field
                name="url"
                component={renderTextField}
                label="Cantiate Disponibila"
                type="url"
              />
            </div>
            <div>
              <Field
                name="url"
                component={renderTextField}
                label="Suma Comanda Minima"
                type="url"
              />
            </div>
            <div>
              <Field
                name="select"
                component={renderTextField}
                select
                label="Select Option"
              >
                <MenuItem className="material-form__option" value="one">
                  Instant Delivery
                </MenuItem>
                <MenuItem className="material-form__option" value="two">
                  Not Instant Delivery
                </MenuItem>
              </Field>
            </div>
            <div>
              <Field
                name="select"
                component={renderTextField}
                select
                label="Select Category"
              >
                <MenuItem className="material-form__option" value="one">
                  Vegetables
                </MenuItem>
                <MenuItem className="material-form__option" value="two">
                  Meats
                </MenuItem>
              </Field>
            </div>
            <div>
              <Field
                name="textarea"
                component={renderTextField}
                placeholder="Type message here"
                multiline
                rowsMax="4"
                label="Descriere"
              />
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="success" type="submit">
                Create
              </Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

AnimatedLineFormWithLabels.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "floating_labels_form", // a unique identifier for this form
})(AnimatedLineFormWithLabels);
