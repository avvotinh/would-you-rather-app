import {
  Container,
  Box,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  LinearProgress,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const QuestionPoll = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Would You Rather
        </Typography>
        <Grid container>
          <Grid xs={12}>
            <Card sx={{ m: 3 }}>
              <CardHeader
                avatar={<Avatar avatarURL={""} />}
                title={"ABC asks:"}
              />
              <CardContent>
                <Grid container direction="column">
                  <Grid
                    item
                    sx={{
                      backgroundColor: "#e0f7fa", // Áp dụng màu nền cho cả cụm
                      padding: "8px",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography variant="body1">ABC</Typography>
                    <LinearProgress variant="determinate" value={50} />
                    <Typography variant="body2" color="textSecondary">
                      chosen by 50 out of 100 users
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: "transparent",
                      padding: "8px",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography variant="body1">ABC</Typography>
                    <LinearProgress variant="determinate" value={50} />
                    <Typography variant="body2" color="textSecondary">
                      chosen by 50 out of 100 users
                    </Typography>
                  </Grid>
                </Grid>{" "}
                <Grid container justifyContent="flex-end">
                  <Typography
                    variant="caption"
                    backgroundColor="#e0f7fa"
                    sx={{ marginTop: "16px", p: 0.5 }}
                  >
                    * Option your choices.
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container>
          <Grid xs={12}>
            <Card sx={{ m: 3 }}>
              <CardHeader
                avatar={<Avatar avatarURL={""} />}
                title={"ABC asks:"}
              />
              <CardContent>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Choose an option:</FormLabel>
                  <RadioGroup
                    aria-label="options"
                    name="options-group"
                    value="option1"
                    onChange={() => {}}
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="Option 1"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="Option 2"
                    />
                  </RadioGroup>
                </FormControl>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {}}
                      sx={{ mt: 2 }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QuestionPoll;
