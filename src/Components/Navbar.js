import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top py-3">
        <Link to="/" class="navbar-brand" style = {{color:"#a0d546",fontSize:"20px"}}>
          Zero Waste
        </Link>
        </nav>
      </div>
    );
  }
}