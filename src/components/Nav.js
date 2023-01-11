import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Heading } from "react-bulma-components";
const Nav = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <Heading size={3} subtitle>
              Melissa Chavez
            </Heading>
          </Navbar.Item>
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            <Link to="/" className="navbar-item">
              About Me
            </Link>
            <Link to="/resume" className="navbar-item">
              Resume
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
};
export default Nav;
