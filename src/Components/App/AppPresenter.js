import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Home from "../Home";
import SignUp from "../SignUp";

const AppPresenter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/signup"} component={SignUp} />
          <Route exact={true} path={"/login"} component={Home} />
          <Route exact={true} path={"/post"} component={Home} />
          <Redirect from={"*"} to={"/"} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppPresenter;
