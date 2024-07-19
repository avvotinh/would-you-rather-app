import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSaveQuestionAnswer } from "../features/users/usersSlice";

const UnansweredQuestion = ({ qid }) => {
  const [value, setValue] = useState("optionOne");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const { optionOne, optionTwo, author: questionAuthor } = questions[qid];
  const { avatarURL, name } = users[questionAuthor];

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== "") {
      dispatch(handleSaveQuestionAnswer({ qid, answer: value }));
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ m: 3 }}>
          <CardHeader
            avatar={<Avatar src={avatarURL} />}
            title={`${name} asks:`}
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose an option:</FormLabel>
                <RadioGroup
                  aria-label="options"
                  name="options-group"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio />}
                    label={optionOne.text}
                  />
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={optionTwo.text}
                  />
                </RadioGroup>
              </FormControl>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mt: 2 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UnansweredQuestion;
