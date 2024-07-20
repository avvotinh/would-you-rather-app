import { Grid } from "@mui/material";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions }) => {
  return (
    <Grid container spacing={2}>
      {questions.map((question) => (
        <Grid item xs={12} key={question.id}>
          <QuestionItem question={question} />
        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionList;
