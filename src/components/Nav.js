import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <li>
        <Link to="/">About Me</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
};
export default Nav;
