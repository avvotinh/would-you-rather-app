import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useSelector } from "react-redux";

const AnsweredQuestion = ({ questionId }) => {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  return (
    <Grid container>
      <Grid xs={12}>
        <Card sx={{ m: 3 }}>
          <CardHeader avatar={<Avatar avatarURL={""} />} title={"ABC asks:"} />
          <CardContent>
            <Grid container direction="column">
              <Grid
                item
                sx={{
                  backgroundColor: "#e0f7fa", // Áp dụng màu nền cho cả cụm
                  padding: "8px",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              >
                <Typography variant="body1">ABC</Typography>
                <LinearProgress variant="determinate" value={50} />
                <Typography variant="body2" color="textSecondary">
                  chosen by 50 out of 100 users
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "transparent",
                  padding: "8px",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              >
                <Typography variant="body1">ABC</Typography>
                <LinearProgress variant="determinate" value={50} />
                <Typography variant="body2" color="textSecondary">
                  chosen by 50 out of 100 users
                </Typography>
              </Grid>
            </Grid>{" "}
            <Grid container justifyContent="flex-end">
              <Typography
                variant="caption"
                backgroundColor="#e0f7fa"
                sx={{ marginTop: "16px", p: 0.5 }}
              >
                * Option your choices.
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AnsweredQuestion;
