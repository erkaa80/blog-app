import React from "react";
import { Button, Footer, Header, TextField } from "../../components";
import "./ContactUsPage.css";

export const ContactUsPage = () => {
  return (
    <div>
      <Header />

      <div id="contact-container">
        <div id="contact-info">
          <h1>Contact Us</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>

          <div id="contact-info-box-container">
            <div className="contact-info-box">
              <h2>Address</h2>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="contact-info-box">
              <h2>Contact</h2>
              <p>
                313-332-8662 <br></br>info@email.com
              </p>
            </div>
          </div>
        </div>

        <div id="contact-form">
          <h2>Leave a message</h2>

          <div id="contact-inputs">
            <TextField
              placeholder="Your name"
              style={{
                width: "248px",
              }}
            />
            <TextField
              placeholder="Your email"
              style={{
                width: "248px",
              }}
            />
          </div>

          <TextField placeholder="Subject" />

          <textarea placeholder="Write a message" rows="6" />

          <Button style={{ width: "140px" }}>Send Message</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
