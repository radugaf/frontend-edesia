import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import MainWrapper from "./MainWrapper";

import Login from "../LogIn/index";
import Products from "../Products/index";
import Inquiries from "../Inquiries/index";
import Cart from "../Cart/index";
import Dashboard from "../Dashboard/index";
import Wishlist from "../Wishlist/index";
import Orders from "../Orders/index";
import OrderHistory from "../OrderHistory/index";
import Invoices from "../Invoices/index";
import AddProduct from "../AddProduct/index";
import Profile from "../Profile/index";
import ProductPage from '../ProductPage'

const Pages = () => (
  <Switch>
    <Route path="/pages/products" component={Products} />
    <Route path="/pages/inquiries" component={Inquiries} />
    <Route path="/pages/cart" component={Cart} />
    <Route path="/pages/wishlist" component={Wishlist} />
    <Route path="/pages/dashboard" component={Dashboard} />
    <Route path="/pages/orders" component={Orders} />
    <Route path="/pages/order-history" component={OrderHistory} />
    <Route path="/pages/invoices" component={Invoices} />
    <Route path="/pages/add-product" component={AddProduct} />
    <Route path="/pages/user-profile" component={Profile} />
    <Route path="/pages/product-detail" component={ProductPage} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/log_in" component={Login} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
