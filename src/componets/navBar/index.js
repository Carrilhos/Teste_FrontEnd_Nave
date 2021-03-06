import React from "react";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

import "./index.css";
import logo from "../../assets/logo.png";

import { logout } from "../../services/auth";

export default function navBar() {
  return (
    <nav className="navBar">
      <div>
        <img src={logo} className="logo" />
      </div>
      <div>
        <Link to="/" onClick={logout}>
          Sair
        </Link>
      </div>
    </nav>
  );
}
