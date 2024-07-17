import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

function PageNotFound() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h3" align="center" gutterBottom>
        404 ERROR
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Page not found.
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Button variant="contained" component={Link} to="/">
          Return to Home Page
        </Button>
      </div>
    </Container>
  );
}

export default PageNotFound;
