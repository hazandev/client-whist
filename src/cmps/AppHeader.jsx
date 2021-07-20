import {NavLink } from 'react-router-dom'

// import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <div className="app-header flex ps-2 space-between align-center">
      <p className="logo">
        <span>W</span>hist-<span>TV</span>
      </p>
      <nav className="navbar clean-list flex w-20 space-evenly">
        <NavLink exact to="/home" activeClassName="selected" >Home</NavLink>
        <NavLink exact to="/admin" activeClassName="selected" >Admin</NavLink>
        <NavLink exact to="/state" activeClassName="selected" >State</NavLink>
      </nav>
    </div>
  );
};
