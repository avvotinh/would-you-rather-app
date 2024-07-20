import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuestionItem = ({ question }) => {
  const users = useSelector((state) => state.users);
  const { avatarURL, name } = users[question.author];
  const { optionOne, id } = question;

  return (
    <Card>
      <CardHeader avatar={<Avatar src={avatarURL} />} title={`${name} ask: `} />
      <CardContent>
        <Typography variant="body1" component="div">
          {optionOne.text}...?
        </Typography>
        <Grid container justifyContent="flex-end">
          <Button component={Link} to={`/questions/${id}`} variant="outlined">
            View Poll
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default QuestionItem;
