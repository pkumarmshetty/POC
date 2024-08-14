import React from "react";
import { Typography, Toolbar, AppBar, styled } from "@mui/material";

function Navbar({ title }) {
  const Header = styled(AppBar)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px; /* Adjust height as needed */
    background-color: #6b941b;
  `;
  return (
    <Header>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </Header>
  );
}

export default Navbar;
