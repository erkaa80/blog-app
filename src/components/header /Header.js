import React from "react";
import "./Header.css";
import { Logo, SearchIcon } from "../../assets";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="header-container">
      <Link to="/">
        <Logo />
      </Link>

      <div id="link-container">
        <Link to="/" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Home
        </Link>
        <Link to="/blogs" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Blogs
        </Link>
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "#3B3C4A" }}
        >
          Contact
        </Link>
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
