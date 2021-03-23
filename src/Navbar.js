import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">Grabaphone</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navaber-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
            <NavLink className="nav-link" exact to="/get-devices">Get Devices</NavLink>
            <NavLink className="nav-link" exact to="/get-latest">Get Latest Devices</NavLink>
            <NavLink className="nav-link" exact to="/get-manufacturers">Get Manufacturers</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;