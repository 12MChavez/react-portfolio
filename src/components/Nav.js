import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bulma-components";
const Nav = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="#">
            <img
              alt="Bulma: a modern CSS framework based on Flexbox"
              height="28"
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item>
              <Link to="/">About Me</Link>
            </Navbar.Item>

            <Navbar.Item>
              <Link to="/resume">Resume</Link>
            </Navbar.Item>

            <Navbar.Item>
              <Link to="/contact">Contact</Link>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container align="end">
            <Navbar.Item>At the end</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
};
export default Nav;
