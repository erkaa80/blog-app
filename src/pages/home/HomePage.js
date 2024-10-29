import React from "react";
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
        Loading ...
      </div>
    );
  }

  return (
    <div id="image-container">
      <Header />
      <div>
        <img src="images/image3.png" />
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
      </div>

      <Footer />
    </div>
  );
};
