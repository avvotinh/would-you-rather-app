import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  CardHeader,
  Avatar,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddQuestion } from "../features/question/questionsSlice";
import { useNavigate } from "react-router-dom";

const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const { avatarURL, name } = users[authedUser];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!optionOne || !optionTwo) {
      setShowError(true);
      return;
    }

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };

    await dispatch(handleAddQuestion(question));
    setOptionOne("");
    setOptionTwo("");
    setShowError(false);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Would You Rather
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Card sx={{ m: 3 }}>
              <CardHeader
                avatar={<Avatar src={avatarURL} />}
                title={`${name} asks:`}
              />
              <CardContent>
                {showError && (
                  <Alert severity="error">
                    <AlertTitle>Error!</AlertTitle>
                    Please fill in both options.
                  </Alert>
                )}
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Option One"
                    name="optionOne"
                    variant="outlined"
                    value={optionOne}
                    sx={{ mb: 1 }}
                    fullWidth
                    onChange={(e) => setOptionOne(e.target.value)}
                    error={showError}
                  />
                  <Typography variant="h6" align="center">
                    OR
                  </Typography>
                  <TextField
                    label="Option Two"
                    name="optionTwo"
                    variant="outlined"
                    value={optionTwo}
                    sx={{ mb: 3, mt: 1 }}
                    fullWidth
                    onChange={(e) => setOptionTwo(e.target.value)}
                    error={showError}
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
