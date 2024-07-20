import { Grid, Typography, Avatar, TableRow, TableCell } from "@mui/material";

const LeaderItem = ({ user }) => {
  const { avatarURL, name, answers, questions } = user;
  const score = Object.keys(answers).length + questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const createdQuestions = questions.length;

  return (
    <TableRow>
      <TableCell
        align="center"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        <Typography variant="h6">{score}</Typography>
      </TableCell>
      <TableCell align="left">
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Avatar alt={name} src={avatarURL} />
          </Grid>
          <Grid item>
            <Typography variant="body1">{name}</Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">{answeredQuestions}</TableCell>
      <TableCell align="right">{createdQuestions}</TableCell>
    </TableRow>
  );
};

export default LeaderItem;
