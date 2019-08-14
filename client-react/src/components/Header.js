import React from 'react';

const Header = ({ title }) => (
    <div>
    <a href="/">Home</a>
    <a href="/about">About the Team</a>
    <a href="/profile">view profile</a>
    <a href="/hobbylist">List of Hobbies</a>
    <a href="/addahobby">Add a Hobby</a>
    <a href="/hobbychats">Hobby Chatroom</a>
    <h1>{title}</h1>
    </div>
);

export default Header;