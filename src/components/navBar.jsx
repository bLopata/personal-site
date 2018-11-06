import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Ben Lopata
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-2">
            <a
              className="nav-item nav-link"
              href="https://www.github.com/bLopata"
            >
              <span className="fa fa-github">...</span>
            </a>
            <a
              className="nav-item nav-link"
              href="https://www.linkedin.com/in/ben-lopata-03a0a0104/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
