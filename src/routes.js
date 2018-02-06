import React from "react";
import { Switch, Route } from "react-router-dom";
import Route1 from "./Route1.js";
import Route2 from "./Route2";
import Route3 from "./Route3";

export default (
  <Switch>
    <Route exact path="/" component={Route1} />
    <Route path="/Route2" component={Route2} />
    <Route path="/Route3" component={Route3} />
  </Switch>
);
