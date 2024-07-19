import {
  Container,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CardHeader,
  Box,
} from "@mui/material";
import logo from "../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuthedUser } from "../features/authedUser/authedUserSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserChange = (event) => {
    const userId = event.target.value;
    setSelectedUser(userId);
  };

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      navigate("/");
    } else {
      alert("Please select a user to sign in.");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card sx={{ width: "35rem" }}>
        <CardHeader></CardHeader>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome to the Would You Rather App
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Please sign in to continue
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginY: 2 }}>
            <img src={logo} alt="description" />
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            Sign in
          </Typography>
          <FormControl variant="filled" fullWidth sx={{ marginBottom: 3 }}>
            <InputLabel id="user-select-label">Select User</InputLabel>
            <Select
              labelId="user-select-label"
              id="user-select"
              value={selectedUser}
              onChange={handleUserChange}
            >
              {Object.values(users).map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
