import { Container, Box, Typography } from "@mui/material";
import LeaderCard from "./LeaderCard";

const LeaderBoard = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ width: "100%", mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          LeaderBoard
        </Typography>
        <LeaderCard />
      </Box>
    </Container>
  );
};

export default LeaderBoard;
