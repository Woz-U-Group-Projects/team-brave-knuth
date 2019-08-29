import React, { Component } from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import './Header.css';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem } from 'reactstrap';

class Header extends Component {
   constructor(props) {
      super(props);
      this.handleMenuClick = this.handleMenuClick.bind(this);
   }

   handleMenuClick({ key }) {
      if(key === "logout") {
         this.props.onLogout();
      }
   }

    render() {
      let navItems;
      if(this.props.currentUser) {
       navItems = [
          <BrowserRouter>
          <Navbar color="light" light expand="md">
            <NavItem key="/hobbylist">
               <NavLink href="/hobbylist">
                  Hobby List
               </NavLink>
            </NavItem>
            <NavItem key="/about">
               <NavLink href="/about">
                  About
               </NavLink>
            </NavItem>
            <NavItem key="/addahobby">
               <NavLink href="/addahobby">
                  Add
               </NavLink>
            </NavItem>
            <NavItem key="/hobbychat">
               <NavLink href="/hobbychat">
                  Hobby Chat 
               </NavLink>
            </NavItem>
            </Navbar>
            </BrowserRouter>
      ];
      } else {
         navItems = [
            <BrowserRouter>
            <NavItem key="/login">
               <NavLink to="/login">Login</NavLink>
            </NavItem>,
            <NavItem key="/signup">
               <NavLink to="/signup">Signup</NavLink>
            </NavItem>
            </BrowserRouter>
         ];
      }
      
      return(
         <div className="container">
            <div className="app-title">
               <h1> Hobby App </h1>  
            </div>
            <Nav mode="horizontal" style={{ lineHeight: '40px' }} >
               {navItems}
            </Nav>     
         </div>   
      );
  }
}

export default Header;


 




















