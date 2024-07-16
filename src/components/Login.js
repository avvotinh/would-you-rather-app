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

const Login = () => {
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
            <Select labelId="user-select-label" id="user-select">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
              <MenuItem value="3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" fullWidth>
            Sign In
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
