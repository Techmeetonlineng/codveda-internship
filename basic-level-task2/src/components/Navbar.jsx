import React from "react";
import { NavLink, Link } from "react-router-dom";
import codvedaLogo from "../assets/codveda.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="nav-brand"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          textDecoration: "none",
        }}
      >
        <img
          src={codvedaLogo}
          alt="Codveda Logo"
          style={{ width: "32px", height: "32px", objectFit: "contain" }}
        />
        <h2>Codveda Internship</h2>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <Link to="/contact" className="btn-primary-apply">
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
