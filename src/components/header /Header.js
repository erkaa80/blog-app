import React, { useState } from "react";
import "./Header.css";
import { Logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { useUserContext } from "../../context";
import { signOutFunction } from "../../firebase";

export const Header = () => {
  const { currentUser } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await signOutFunction();
  };

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
        <Link to="/tags" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Tags
        </Link>
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "#3B3C4A" }}
        >
          Contact
        </Link>
      </div>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar src="https://console.cloudinary.com/console/c-2ab166459d72a66933b414eda6f255/media_library/folders/c9c55c7631092a3f9e5c9f3f1fbe370bfa?view_mode=mosaic" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          Welcome {currentUser ? currentUser.displayName : "Guest"}!
        </MenuItem>

        <Divider />

        {currentUser ? (
          <MenuItem onClick={handleSignOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <MenuItem onClick={() => navigate("/sign-up")}>Join us</MenuItem>
        )}
      </Menu>
    </div>
  );
};
