import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          See more
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-2">
            <ul className="my-portfolio">
              <a
                className="nav-item nav-link"
                href="https://www.github.com/bLopata"
              >
                <i className="fa fa-github" name="github" />
              </a>
              <a
                className="nav-item nav-link"
                href="https://www.linkedin.com/in/ben-lopata-03a0a0104/"
              >
                <i className="fa fa-linkedin" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
