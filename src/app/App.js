import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import QuestionPoll from "../components/QuestionPoll";
import NewQuestion from "../components/NewQuestion";
import LeaderBoard from "../components/LeaderBoard";
import NotFound from "../components/NotFound";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questions/:id" element={<QuestionPoll />} />
        <Route path="/add" element={<NewQuestion />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
