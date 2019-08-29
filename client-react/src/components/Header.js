import React from 'react';

const Header = ({ title }) => (
    <nav className="header navbar navbar-dark bg-dark" style={{overflowX: 'hidden'}}>
      <div className="container">
         <div className="header-navigation-items">
            <a href="/">Home</a>
               <br />
            <a href="/signup">Sign up</a>
            <br />
            <a href="/login">Login</a>
            <br />
            <a href="/about">About the Team</a>
               <br />
            <a href="/profile">Profile</a>
               <br />
            <a href="/hobbylist">Hobbies</a>
               <br />
               <a href="/addahobby">Add</a>
               <br />
            <a href="/hobbychat">Chatroom</a>       
         </div>
      </div>
      <h2>{title}</h2>
     </nav>
);

export default Header;


