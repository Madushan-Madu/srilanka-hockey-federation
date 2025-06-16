import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SLHFLogo from '../assets/images/slhf-logo.png'; // You'll need to add your logo image here

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <img src={SLHFLogo} alt="Sri Lanka Hockey Federation Logo" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                National Team News
              </NavLink>
            </li>
            <li>
              <NavLink to="/associations" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Associations
              </NavLink>
            </li>
            <li>
              <NavLink to="/tournaments" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Tournaments
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipment" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Equipments
              </NavLink>
            </li>
            {/* Add Gallery link here too if it's in the header */}
            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;