import { Container, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import { getQuestions } from "../app/selector";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const unansweredQuestions = useSelector((state) =>
    getQuestions(state, "UNANSWERED")
  );
  const answeredQuestions = useSelector((state) =>
    getQuestions(state, "ANSWERED")
  );

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
