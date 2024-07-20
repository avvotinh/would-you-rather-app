import { useSelector } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import LeaderItem from "./LeaderItem";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);

  const sortedUser = Object.values(users).sort((userA, userB) => {
    const scoreA = Object.keys(userA.answers).length + userA.questions.length;
    const scoreB = Object.keys(userB.answers).length + userB.questions.length;
    return scoreB - scoreA;
  });

  return (
    <Container maxWidth="md">
      <Box sx={{ width: "100%", mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          LeaderBoard
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                  align="center"
                >
                  SCORE
                </TableCell>
                <TableCell align="left">USER</TableCell>
                <TableCell align="right">ANSWERED QUESTIONS</TableCell>
                <TableCell align="right">CREATED QUESTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUser.map((user) => (
                <LeaderItem key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default LeaderBoard;
