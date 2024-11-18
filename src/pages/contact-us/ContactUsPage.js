import React, { useState } from "react";
import { Button, Footer, Header, TextField } from "../../components";
import "./ContactUsPage.css";
import { addDoc } from "firebase/firestore";
import { contactsCollection } from "../../firebase";

export const ContactUsPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // 2 second
  const handleSubmit = async () => {
    if (fullName === "" || email === "" || subject === "" || message === "") {
      alert("Please fill out all the fields!");
    } else {
      console.log("Starting");

      // Waiting to promise to be fullfilled or rejected
      await addDoc(contactsCollection, {
        email,
        fullName,
        subject,
        message,
      });

      setEmail("");
      setFullName("");
      setSubject("");
      setMessage("");

      console.log("Ending");
      alert("Contact message sent successfully!");
    }
  };

  console.log(handleSubmit());

  const test = () => {
    handleSubmit();
    console.log("Example function");
  };

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
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <TextField
              placeholder="Your email"
              style={{
                width: "248px",
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <TextField
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />

          <textarea
            placeholder="Write a message"
            rows="6"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <Button style={{ width: "140px" }} onClick={test}>
            Send Message
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
