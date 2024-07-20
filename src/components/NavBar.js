import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { setAuthedUser } from "../features/authedUser/authedUserSlice";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const { avatarURL, name } = users[authedUser];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch(setAuthedUser(null));
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <i className="material-icons">menu</i>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem component={Link} to="/">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/add">
                <Typography textAlign="center">New Question</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/leaderboard">
                <Typography textAlign="center">Leaderboard</Typography>
              </MenuItem>
            </Menu>
          </Box>

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

          <Avatar src={avatarURL} alt={name} sx={{ mr: 1 }} />
          <Typography variant="subtitle1" sx={{ mr: 2 }}>
            {name}
          </Typography>
          <IconButton onClick={handleLogout} style={{ color: "inherit" }}>
            <i className="material-icons">exit_to_app</i>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
