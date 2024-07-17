import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Box,
} from "@mui/material";

const Header = () => {
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
        <IconButton component={Link} to="/login" style={{ color: "inherit" }}>
          <i className="material-icons">exit_to_app</i>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
