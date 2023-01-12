import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Heading } from "react-bulma-components";
const Nav = () => {
  let show = false;

  function isActive() {
    const navMenu = document.getElementById("menu");
    const menuBurger = document.getElementById("menuBurger");
    // if burger menu is clicked the menu will toggle between show and hide
    if (!show) {
      show = true;
      navMenu.classList.add("is-active");
      menuBurger.style.display = "none";
    } else {
      show = false;
      navMenu.classList.remove("is-active");
      menuBurger.style.display = "block";
    }
  }
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Heading size={3} subtitle>
            Melissa Chavez
          </Heading>
        </Navbar.Brand>

        <Navbar.Menu id="menu" onClick={() => isActive()}>
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
            <Link to="/portfolio" className="navbar-item">
              Portfolio
            </Link>
          </Navbar.Container>
        </Navbar.Menu>
        <Navbar.Burger id="menuBurger" onClick={() => isActive()} />
      </Navbar>
    </div>
  );
};
export default Nav;
