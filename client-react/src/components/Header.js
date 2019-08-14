import React from 'react';

const Header = ({ title }) => (
    <div>
    <a href="/">Home</a>
    <hr/>
    <a href="/about">About the Team</a>
    <hr/>
    <a href="/profile">Profile</a>
    <hr/>
    <a href="/hobbylist">List of Hobbies</a>
    <hr/>
    <a href="/hobbychat">Hobby Chatroom</a>
    <h1>{title}</h1>
    </div>
);

export default Header;