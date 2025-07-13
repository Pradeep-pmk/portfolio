import React, { useState } from 'react';
import { Link } from "react-scroll";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // for menu icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <h1>Develop<span>er</span></h1>
      </div>

      <div className={`header__right ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
          <h4>About</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Projects</h4>
        </Link>
        <Link to="exp" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Experiences</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Contact</h4>
        </Link>
        <h3 className='header__rightButton' onClick={closeMenu}>Join With Me</h3>
      </div>

      {/* Menu Icon for mobile */}
      <div className="menu__icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Header;
