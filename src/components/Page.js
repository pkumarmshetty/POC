import React, { useState, useEffect } from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { useParams } from "react-router-dom";

// Styles for the scrollable cards area
const ScrollableCardsContainer = styled("div")({
  display: "flex",
  overflowX: "auto",
  padding: "16px",
  gap: "16px",
  borderBottom: "1px solid #ccc",
  whiteSpace: "nowrap", // Ensure cards are in a single row
});

// Styles for individual cards
const Card = styled(Paper)({
  width: "200px",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: "16px",
  textAlign: "center",
  flexShrink: 0, // Prevent cards from shrinking
  position: "relative", // Allows absolute positioning for child elements
});

// Styles for the image
const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover", // Cover the card area without stretching the image
  borderRadius: "8px", // Optional: rounded corners
});

const FormContainer = styled("div")({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  color: "black", // White text color for contrast
  borderRadius: "8px", // Optional: rounded corners
});

// Styles for the button container
const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end", // Align button to the right
});

// Styles for the button
const StyledButton = styled(Button)({
  padding: "6px 12px",
  fontSize: "0.875rem",
});

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { records } = useStore();
  const [formValues, setFormValues] = useState({});

  // Find the record based on the id
  const data = records.find((record) => record.id === +id);

  // Initialize formValues state with formDetails if data is available
  useEffect(() => {
    if (data) {
      setFormValues(data.formDetails);
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Handle form submission here with the formValues
    console.log("Form submitted with values:", formValues);
    navigate("/PageDetails");
  };

  return (
    <Container>
      <ScrollableCardsContainer>
        {records.map((url, index) => (
          <Card key={index}>
            <StyledImage
              src={url.imageUrls}
              alt="pic"
              onClick={() => {
                navigate(`/page/${index + 1}`);
              }}
            />
          </Card>
        ))}
      </ScrollableCardsContainer>
      <Paper>
        <FormContainer>
          <Typography variant="h6">Form Title</Typography>
          {data &&
            Object.keys(data.formDetails).map((item, i) => (
              <TextField
                key={i}
                label={item}
                variant="outlined"
                fullWidth
                multiline={item === "Message"}
                rows={item === "Message" ? 4 : undefined} // Set rows only if multiline
                name={item} // Use item as the name attribute for input fields
                value={formValues[item] || ""}
                onChange={handleInputChange} // Update state on change
              />
            ))}
          <ButtonContainer>
            <StyledButton
              variant="contained"
              color="success"
              onClick={submitHandler}
            >
              Submit
            </StyledButton>
          </ButtonContainer>
        </FormContainer>
      </Paper>
    </Container>
  );
};

export default Page;

