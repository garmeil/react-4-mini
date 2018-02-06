import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/Route2">
            Route 2
          </NavLink>
          <NavLink activeClassName="active" to="/Route3">
            Route 3
          </NavLink>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
