import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import QuestionPoll from "../components/QuestionPoll";
import NewQuestion from "../components/NewQuestion";
import LeaderBoard from "../components/LeaderBoard";
import PageNotFound from "../components/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./shared";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      {authUser && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questions/:id" element={<QuestionPoll />} />
        <Route path="/add" element={<NewQuestion />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/notfound" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
