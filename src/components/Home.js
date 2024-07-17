import {
  Container,
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Button,
  Avatar,
} from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Answered Questions, 1 for Unanswered Questions

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Sample data for questions (replace with your actual data)
  const answeredQuestions = [
    {
      id: 1,
      title: "Question 1",
      content: "This is the content of question 1",
      author: { name: "John Doe", avatarUrl: "https://example.com/avatar.jpg" },
    },
    {
      id: 2,
      title: "Question 2",
      content: "This is the content of question 2",
      author: {
        name: "Jane Doe",
        avatarUrl: "https://example.com/avatar2.jpg",
      },
    },
  ];
  const unansweredQuestions = [
    {
      id: 3,
      title: "Question 3",
      content: "This is the content of question 3",
      author: {
        name: "Peter Pan",
        avatarUrl: "https://example.com/avatar3.jpg",
      },
    },
    {
      id: 4,
      title: "Question 4",
      content: "This is the content of question 4",
      author: {
        name: "Alice Wonderland",
        avatarUrl: "https://example.com/avatar4.jpg",
      },
    },
  ];
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
          {selectedTab === 0 && (
            <Grid container spacing={2}>
              {answeredQuestions.map((question) => (
                <Grid item xs={12} key={question.id}>
                  <Card>
                    <CardHeader
                      avatar={<Avatar src={question.author.avatarUrl} />}
                      title={question.author.name}
                    />
                    <CardContent>
                      <Typography variant="body1" component="div">
                        {question.content}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          mt: 1,
                        }}
                      >
                        <Button variant="outlined">View Poll</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          {selectedTab === 1 && (
            <Grid container spacing={2}>
              {unansweredQuestions.map((question) => (
                <Grid item xs={12} key={question.id}>
                  <Card>
                    <CardHeader
                      avatar={<Avatar src={question.author.avatarUrl} />}
                      title={question.author.name}
                    />
                    <CardContent>
                      <Typography variant="body1" component="div">
                        {question.content}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          mt: 1,
                        }}
                      >
                        <Button variant="outlined">View Poll</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
