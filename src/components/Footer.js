import React from "react";
import { Navbar } from "react-bulma-components";
const Footer = () => {
  return (
    <div>
      <Navbar className="navbar left-margin">
        <Navbar.Menu>
          <Navbar.Container>
            <a
              href="https://www.linkedin.com/in/melissac-dev/"
              className="navbar-item"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/12MChavez"
              className="navbar-item"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>

            <p className="navbar-item">Made with love, react, and bulma.</p>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
};
export default Footer;
