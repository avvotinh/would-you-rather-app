import { Grid } from "@mui/material";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions }) => {
  return (
    <Grid container spacing={2}>
      {questions.map((question) => (
        <Grid item xs={12} key={question.id}>
          <QuestionCard question={question} />
        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionList;
