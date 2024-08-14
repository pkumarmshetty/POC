import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails);
    navigate("/dashboard");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "97vh", padding: "0 16px" }} // Added padding for smaller screens
    >
      <Grid item>
        <Box
          p={3}
          bgcolor="background.paper"
          borderRadius={2}
          boxShadow={3}
          width={{ xs: "83%", sm: 400 }} // Responsive width for mobile and larger screens
          maxWidth="400px" // Limit maximum width
        >
          <Typography variant="h6" align="center" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </Box>
            <Button fullWidth variant="contained" color="success" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
