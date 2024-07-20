import {
  Grid,
  Typography,
  Table,
  Avatar,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const LeaderCard = () => {
  return (
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
            <TableCell align="right">UNANSWERED QUESTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              <Typography variant="h6">70</Typography>
            </TableCell>
            <TableCell align="left">
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Avatar alt={""} src={""} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Hop Le</Typography>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell align="right">7</TableCell>
            <TableCell align="right">6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderCard;
