import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import navlinks from "./navLinks";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`offcanvas ${isMenuOpen ? "active" : ""}`}>
      <FaTimes
          style={{
            color: "white",
            position: "fixed",
            right: 20,
            top: 35,
            cursor:"pointer"
          }}
          onClick={closeMenu}
        />
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
          <li><NavLink to="/register" onClick={closeMenu}>Register</NavLink> </li>
          <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink> </li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Header;
