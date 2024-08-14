import React from "react";
import { Typography, Box, styled } from "@mui/material";

function Footer() {
  const Footer = styled(Box)`
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: #f0f0f0;
    color: black;
    height: 64px; /* Adjust height as needed */
  `;
  return (
    <Footer>
      <Typography variant="body2">©2024</Typography>
    </Footer>
  );
}

export default Footer;
