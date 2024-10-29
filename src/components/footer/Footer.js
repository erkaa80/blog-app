import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FooterLogo, Instagram, Linkedin, Twitter } from "../../assets";
import { Facebook } from "../../assets/Facebook";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-container">
        <div id="footer-top-section">
          <div id="footer-about-section">
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div id="footer-contact-info">
              <p>
                <b>Email:</b> info@jstemplate.net
              </p>
              <p>
                <b>Phone:</b> 880 123 456 789
              </p>
            </div>
          </div>
          <div id="footer-navigation">
            <Link to="/" style={{ textDecoration: "none", color: "#3B3C4A" }}>
              Home
            </Link>
            <Link
              to="/blogs"
              style={{ textDecoration: "none", color: "#3B3C4A" }}
            >
              Blogs
            </Link>
            <Link
              to="/contact-us"
              style={{ textDecoration: "none", color: "#3B3C4A" }}
            >
              Contact
            </Link>
          </div>
          <div id="footer-social">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div id="footer-bottom-section">
          <FooterLogo />

          <div id="footer-legal">
            <p>Terms of Service</p>
            <div id="column"></div>
            <p>Privacy Policy</p>
            <div id="column"></div>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
