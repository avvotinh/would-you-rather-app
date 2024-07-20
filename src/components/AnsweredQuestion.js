import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import OptionProgress from "./OptionProgress";

const AnsweredQuestion = ({ qid }) => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const { optionOne, optionTwo, author: questionAuthor } = questions[qid];
  const { avatarURL, name } = users[questionAuthor];

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );

  const isYourVoteOptionOne = optionOne.votes.includes(authedUser);
  const isYourVoteOptionTwo = optionTwo.votes.includes(authedUser);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            avatar={<Avatar src={avatarURL} alt={name} />}
            title={`${name} ask:`}
          />
          <CardContent>
            <Grid container direction="column">
              <Grid
                item
                sx={{
                  backgroundColor: isYourVoteOptionOne
                    ? "#e0f7fa"
                    : "transparent",
                  padding: "8px",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              >
                <Typography variant="body1">{optionOne.text}</Typography>
                <OptionProgress value={optionOnePercent} />
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: isYourVoteOptionTwo
                    ? "#e0f7fa"
                    : "transparent",
                  padding: "8px",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              >
                <Typography variant="body1">{optionTwo.text}</Typography>
                <OptionProgress value={optionTwoPercent} />
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
  );
};

export default AnsweredQuestion;
