import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "../../components";
import { signUpFunction } from "../../firebase";

export const SignUpPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      try {
        await signUpFunction(
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.password
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div id="sign-up-container">
      <form id="form-container">
        <h1>Sign Up</h1>

        <TextField
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>

        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Already have an account?
        </Link>

        {error && <p style={{ color: "red", fontSize: "12px" }}> {error}</p>}
      </form>
    </div>
  );
};
