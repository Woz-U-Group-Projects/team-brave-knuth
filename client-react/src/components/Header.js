import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./Header.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick({ key }) {
    if (key === "logout") {
      this.props.onLogout();
    }
  }

  render() {
    let navItems;
    if (this.props.currentUser) {
      navItems = [
        <BrowserRouter>
          <Navbar color="light" light expand="md">
            <NavItem key="/hobbylist">
              <NavLink href="/hobbylist">Hobby List</NavLink>
            </NavItem>
            <NavItem key="/addahobby">
              <NavLink href="/addahobby">Add Hobby</NavLink>
            </NavItem>
            <NavItem key="/hobbychat">
              <NavLink href="/hobbychat">Hobby Chat</NavLink>
            </NavItem>
            <NavItem key="/about">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem key="/logout">
              <NavLink href="/login">Logout</NavLink>
            </NavItem>
          </Navbar>
        </BrowserRouter>
      ];
    } else {
      navItems = [
        <BrowserRouter>
          <NavItem key="/login">
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem key="/signup">
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
        </BrowserRouter>
      ];
    }

    return (
      <div className="container">
        <div className="app-title">
          <NavLink href="/">
            <h1> Hobby-App </h1>
          </NavLink>
        </div>
        <Nav mode="horizontal" style={{ lineHeight: "40px" }}>
          {navItems}
        </Nav>
      </div>
    );
  }
}