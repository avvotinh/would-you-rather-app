import { Container, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const authUser = useSelector((state) => state.authUser);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  const answeredIds = Object.keys(users[authUser].answers);
  const answeredQuestions = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQuestions = Object.values(questions)
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
          <Tab label="Answered Questions" />
          <Tab label="Unanswered Questions" />
        </Tabs>
        <Box sx={{ width: "100%", mt: 2 }}>
          {selectedTab === 0 && <QuestionList questions={answeredQuestions} />}
          {selectedTab === 1 && (
            <QuestionList questions={unansweredQuestions} />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
