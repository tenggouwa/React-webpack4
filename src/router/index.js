import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "../pages/home/index.js";
import NewList from "../pages/newList/index.js";
import Product from "../pages/product/index.js";
import AddUs from "../pages/about/addUs/index.js";
import Company from "../pages/about/company/index.js";
import ContentUs from "../pages/about/contentUs/index.js";
import Develop from "../pages/about/develop/index.js";
import Deposit from "../pages/deposit/index.js";
import Business from "../pages/business/index.js";
import Fund from "../pages/fund/index.js";
const PrimaryLayout = () => (
  <div className="primary-layout">
    {/* <header>
      <Link to="/">toHome</Link>
    </header> */}
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newList" exact component={NewList} />
        <Route path="/product" exact component={Product} />
        <Route path="/addUs" exact component={AddUs} />
        <Route path="/company" exact component={Company} />
        <Route path="/contentUs" exact component={ContentUs} />
        <Route path="/develop" exact component={Develop} />
        <Route path="/deposit" exact component={Deposit} />
        <Route path="/business" exact component={Business} />
        <Route path="/fund" exact component={Fund} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;