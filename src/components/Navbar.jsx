import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import '../styles/Navbar.css'


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">MyLogo</a>

        {/* Hamburger Menu (Mobile) */}
        <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <GiHamburgerMenu />
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? "show" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>

          {/* Dropdown Menu */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>Services ⌄</button>
            
            {/* Dropdown Content */}
            <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Marketing</a></li>
            </ul>
          </li>

          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
