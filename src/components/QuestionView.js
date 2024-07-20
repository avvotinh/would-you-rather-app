import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import PageNotFound from "./PageNotFound";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import { isAnsweredQuestion } from "../app/selector";

const QuestionView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions);
  const isQuestionExisting = Object.keys(questions).includes(id);
  const isAnswered = useSelector((state) => isAnsweredQuestion(state, id));

  return (
    <Fragment>
      {isQuestionExisting ? (
        <Container maxWidth="sm">
          <Box sx={{ width: "100%", mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Would You Rather
            </Typography>
            {isAnswered ? (
              <AnsweredQuestion qid={id} />
            ) : (
              <UnansweredQuestion qid={id} />
            )}
          </Box>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(-1)}
            sx={{ mt: 2 }}
          >
            Back
          </Button>
        </Container>
      ) : (
        <PageNotFound />
      )}
    </Fragment>
  );
};

export default QuestionView;
