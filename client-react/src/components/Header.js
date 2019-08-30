import React from "react";

const Header = ({ title }) => (
  <nav
    className="header navbar navbar-dark bg-dark"
    style={{ overflowX: "hidden" }}
  >
    <div className="container">
      <div className="header-navigation-items">
        <a href="/">Home</a>
        <br />
        <a href="/signin">Login</a>
        <br />
        <a href="/signup">Sign Up</a>
        <br />
        <a href="/about">About the Team</a>
        <br />
        <a href="/profile">Profile</a>
        <br />
        <a href="/hobbylist">List of Hobbies</a>
        <br />
        <a href="/addahobby">Add a Hobby</a>
        <br />
        <a href="/hobbychat">Hobby Chatroom</a>
      </div>
    </div>
    <h2>{title}</h2>
  </nav>
);

export default Header;
