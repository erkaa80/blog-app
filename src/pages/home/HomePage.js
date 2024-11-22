import React from "react";
import { CircularProgress } from "@mui/material";
import { Header, Footer, Button } from "../../components";
import { useUserContext } from "../../context";
import { signOutFunction } from "../../firebase";
import "./HomePage.css";

export const HomePage = () => {
  const { loading, currentUser } = useUserContext();

  const handleSignOut = async () => {
    await signOutFunction();
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <img id="home-image" src="images/image3.png" />
      <div id="home-slider">
        <img src="images/back.png" />
        <img src="images/forward.png" />
      </div>

      <div id="home-container">
        {currentUser ? (
          <>
            <h3>Welcome back, {currentUser.displayName}!</h3>
            <Button onClick={handleSignOut} style={{ width: "100px" }}>
              Sign out
            </Button>
          </>
        ) : (
          <h3>Welcome, Guest!</h3>
        )}
        <div id="home-trending">
          <img src="images/content.png" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
