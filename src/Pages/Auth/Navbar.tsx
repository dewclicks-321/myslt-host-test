// components/Navbar.tsx
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        <a href="#" className="nav-link">Contact us</a>
        <a href="#" className="nav-link">Support</a>
      </div>
    </nav>
  );
};

export default Navbar;
