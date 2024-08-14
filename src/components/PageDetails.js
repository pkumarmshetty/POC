import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Container, CssBaseline, Box, styled } from "@mui/material";
function PageDetails() {
  const MainContent = styled(Container)`
    margin-top: 100px; /* Height of the Header */
    margin-bottom: 40px; /* Height of the Footer */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align items horizontally */
  `;

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <CssBaseline />
        <Navbar title="website" />
        <MainContent></MainContent>
        <Footer />
      </Box>
    </div>
  );
}

export default PageDetails;
