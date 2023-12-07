import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navlinks from "./navLinks";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () =>{
    setMenuOpen(false);
  }
  return (
    <section className={`header`}>
      <NavLink to="/" className="logo">
        <img src="https://bluetutors.co.uk/images/logo_header.png" alt="" />
        <div>Smart Tutor</div>
      </NavLink>
      <div className={`nav-links`}>
        <ul>
          {navlinks.map((links, index) => {
            return (
              <li key={index}>
                <NavLink to={links.path} onClick={closeMenu}>
                  {links.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="button-container">
        <button>Register</button>
        <button>Login</button>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`offcanvas ${isMenuOpen ? "active" : ""}`}>
      <NavLink to="/" className="logo"  onClick={closeMenu}> 
        <img src="https://bluetutors.co.uk/images/logo_header.png" alt="" />
        <div>Smart Tutor</div>
      </NavLink>
      <div className={`offcanvas-nav-links`}>
        <ul>
          {navlinks.map((links, index) => {
            return (
              <li key={index}>
                <NavLink to={links.path} onClick={toggleMenu}>
                  {links.title}
                </NavLink>
              </li>
            );
          })}
          <li><NavLink to="">Register</NavLink> </li>
          <li><NavLink to="">Login</NavLink> </li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Header;
