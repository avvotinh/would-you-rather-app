import { Container, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  const answeredIds = Object.keys(users[authedUser].answers);
  const unansweredQuestions = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const answeredQuestions = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mt: 2 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>
        <Box sx={{ width: "100%", mt: 2 }}>
          {selectedTab === 0 && (
            <QuestionList questions={unansweredQuestions} />
          )}
          {selectedTab === 1 && <QuestionList questions={answeredQuestions} />}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
