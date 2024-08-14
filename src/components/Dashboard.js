import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useStore } from "../store";
import {
  Box,
  Container,
  CssBaseline,
  Card,
  CardMedia,
  Grid,
  styled,
} from "@mui/material";

const MainContent = styled(Container)`
  margin-top: 100px; /* Height of the Header */
  margin-bottom: 40px; /* Height of the Footer */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
`;

const ImageCard = styled(Card)`
  max-width: 345px; /* Adjust size as needed */
  margin: 16px;
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const { records } = useStore();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar title="POC Portal" />
      <MainContent>
        <Grid container spacing={2} justifyContent="center">
          {records.map((url, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ImageCard>
                <CardMedia
                  component="img"
                  height="140" /* Adjust height as needed */
                  image={url.imageUrls}
                  alt={`Image ${index + 1}`}
                  onClick={() => {
                    navigate(`/page/${index + 1}`);
                  }}
                />
              </ImageCard>
            </Grid>
          ))}
        </Grid>
      </MainContent>
      <Footer />
    </Box>
  );
};

export default Dashboard;
