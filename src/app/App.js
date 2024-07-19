import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import QuestionView from "../components/QuestionView";
import NewQuestion from "../components/NewQuestion";
import LeaderBoard from "../components/LeaderBoard";
import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import { handleInitialData } from "./shared";

const App = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <Fragment>
          {authedUser && <NavBar />}
          <Outlet />
        </Fragment>
      ),
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/questions/:id",
          element: (
            <ProtectedRoute>
              <QuestionView />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add",
          element: (
            <ProtectedRoute>
              <NewQuestion />
            </ProtectedRoute>
          ),
        },
        {
          path: "/leaderboard",
          element: (
            <ProtectedRoute>
              <LeaderBoard />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
