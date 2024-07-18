import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setAuthedUser } from "../features/authUser/authUserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setAuthedUser(null));
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            New Question
          </Button>
          <Button color="inherit" component={Link} to="/leaderboard">
            Leaderboard
          </Button>
        </Box>

        <Avatar alt="Hop Le" src="" sx={{ mr: 1 }} />
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          Hop Le
        </Typography>
        <IconButton onClick={handleLogout} style={{ color: "inherit" }}>
          <i className="material-icons">exit_to_app</i>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
