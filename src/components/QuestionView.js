import { Container, Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

const QuestionView = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const autherUserAnsweres = users[authedUser].answers;
  const isAnswered = Object.keys(autherUserAnsweres).includes(id);
  const isQuestionExisting = Object.keys(questions).includes(id);

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
        </Container>
      ) : (
        <PageNotFound />
      )}
    </Fragment>
  );
};

export default QuestionView;
