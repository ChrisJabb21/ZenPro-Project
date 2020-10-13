import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/zenpro-logo.png" alt="ZenPro Logo" />
          </Link>
          <div className="nav-menu-items">
            <Link to="/">About Us</Link>
            {/* Placeholder link, there is no About Us page */}
            <Link to="/shop">Shop</Link>
            <Link to="/events">Events</Link>
            <div className="nav-icons">
            <Link to="/" className="icon">
              <i class="fas fa-user-circle"></i>
            </Link>
            <Link to="/" className="icon">
              <i class="fas fa-shopping-cart"></i>
            </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
