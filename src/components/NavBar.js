import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/link"
            style={{ textDecoration: "none", color: "inherit", marginLeft: 20 }}
          >
            Link
          </Typography>
          <Typography
            component={Link}
            to="/disabled"
            style={{ textDecoration: "none", color: "inherit", marginLeft: 20 }}
          >
            Disabled
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ marginRight: 10 }}>Hop Le</Typography>
          <Avatar
            alt="Avatar"
            src="path-to-avatar.jpg"
            sx={{ width: 30, height: 30, marginRight: 10 }}
          />
          <IconButton component={Link} to="/login" style={{ color: "inherit" }}>
            <i className="material-icons">exit_to_app</i>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
