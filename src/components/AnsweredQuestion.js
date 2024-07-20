import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Badge,
} from "@mui/material";
import OptionProgress from "./OptionProgress";

const AnsweredQuestion = ({ qid }) => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const { optionOne, optionTwo, author: questionAuthor } = questions[qid];
  const { avatarURL, name } = users[questionAuthor];

  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercent = Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPercent = Math.round((optionTwoVotes / totalVotes) * 100);

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
                  position: "relative",
                }}
              >
                <Typography variant="body1">{optionOne.text}</Typography>
                {isYourVoteOptionOne && (
                  <Badge
                    badgeContent="Your vote"
                    color="success"
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 10,
                    }}
                  />
                )}
                <OptionProgress value={optionOnePercent} />
                <Typography variant="body2" color="textSecondary">
                  {optionOneVotes} out of {totalVotes} votes
                </Typography>
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
                  position: "relative",
                }}
              >
                <Typography variant="body1">{optionTwo.text}</Typography>
                {isYourVoteOptionTwo && (
                  <Badge
                    badgeContent="Your vote"
                    color="success"
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 10,
                    }}
                  />
                )}
                <OptionProgress value={optionTwoPercent} />
                <Typography variant="body2" color="textSecondary">
                  {optionTwoVotes} out of {totalVotes} votes
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AnsweredQuestion;
