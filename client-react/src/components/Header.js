import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/Header.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle
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
    let username;
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
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem key="/logout">
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Navbar>
        </BrowserRouter>
      ];
      username = localStorage.getItem("username");
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
      username = "Please log in.";
    }

    return (
      <div className="container">
        <div className="app-title">
          <NavLink href="/hobbylist">
            <h1> Hobby-App </h1>
            <h5>{username}</h5>
          </NavLink>
        </div>
        <Nav mode="horizontal" style={{ lineHeight: "40px" }}>
          {navItems}
        </Nav>
      </div>
    );
  }
}

// function ProfileDropdownMenu(props) {
// const dropdownMenu = (
//      <Nav onClick={props.handleMenuClick} className="profile-dropdown-menu">
//        <Nav.Item key="user-info" className="dropdown-item" disabled>
//          <div className="user-full-name-info">
//            {props.currentUser.name}
//          </div>
//          <div className="username-info">
//            @{props.currentUser.username}
//          </div>
//        </Nav.Item>
//        <DropdownItem divider/>
//        <Nav.Item key="logout" className="dropdown-item">
//          Logout
//        </Nav.Item>
//      </Nav>
// );

//    return (
//      <DropdownMenu overlay={dropdownMenu} trigger={['click']} getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
//         Menu
//      </DropdownMenu>
//    );
//  }

//export default Header;
