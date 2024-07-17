import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

const NewQuestion = () => {
  const handleSubmit = () => {};

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Would You Rather
        </Typography>
        <Grid container>
          <Grid xs={12}>
            <Card sx={{ m: 3 }}>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Choice One"
                    name="optionOne"
                    variant="outlined"
                    sx={{ mb: 1 }}
                    fullWidth
                  />
                  <Typography variant="h6" align="center">
                    OR
                  </Typography>
                  <TextField
                    label="Choice Two"
                    name="optionTwo"
                    variant="outlined"
                    sx={{ mb: 3, mt: 1 }}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewQuestion;
