import React from "react";
import Chat from "./Chat";
import Log from "./Log";
import { Route, Switch, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-dark">
        <h2 style={{ color: "#ffff" }}>Capo Di Capi</h2>

        <ul style={{ marginTop: "0px", position: "absolute", left: "200px" }}>
          <li
            style={{
              display: "inline",
              padding: "25px",
              fontSize: "20px",
              color: "white",
            }}
          >
            <Link style={{ paddingTop: "5px", color: "white" }} to="/">
              CHAT
            </Link>
          </li>
          <li
            className="m-1"
            style={{
              display: "inline",
              padding: "25px",
              fontSize: "20px",
            }}
          >
            <Link to="/loghistory" style={{ color: "white" }}>
              LOG
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={Chat} exact />
        <Route path="/loghistory" component={Log} />
      </Switch>
    </div>
  );
};

export default Navbar;
