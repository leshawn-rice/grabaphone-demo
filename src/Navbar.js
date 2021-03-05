import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Navbar">
      <NavLink className="Navbar-Link" exact to="/" >Home</NavLink>
      <NavLink className="Navbar-Link" exact to="/get-devices">Get Devices</NavLink>
      <NavLink className="Navbar-Link" exact to="/get-latest">Get Latest Devices</NavLink>
      <NavLink className="Navbar-Link" exact to="/get-manufacturers">Get Manufacturers</NavLink>
    </div>
  );
}

export default Navbar;