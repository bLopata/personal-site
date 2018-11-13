import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
  RootComponent
} from "@trendmicro/react-sidenav";
import { Router, Route } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <SideNav
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem
            eventkey={2}
            href="https://github.com/bLopata"
            eventKey="github"
          >
            <NavIcon>
              <i className="fa fa-github" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Github</NavText>
          </NavItem>
          <NavItem eventKey="linkedin">
            <NavIcon>
              <i className="fa fa-linkedin" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Linkedin</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default NavBar;
