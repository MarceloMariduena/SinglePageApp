import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="Navbar">
        <h2 className="logo-link"><Link to="/Home">{props.logo}</Link></h2>
        <ul className="nav-menu">
            <li><Link to="/Actors">{props.first}</Link></li>
            <li><Link to="/Actresses">{props.second}</Link></li>
            <li><Link to="/Films">{props.third}</Link></li>
        </ul>
    </nav>
);

export default Navbar;