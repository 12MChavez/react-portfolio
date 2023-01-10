import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <li>
        <Link to="/">LinkedIn</Link>
      </li>
      <li>
        <Link to="/resume">GitHub Profile</Link>
      </li>
      <p>Made with love, react, and bulma.</p>
    </div>
  );
};
export default Nav;
