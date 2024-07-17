import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar,
} from "@mui/material";

const LeaderCard = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ m: 3 }}>
          <CardHeader avatar={<Avatar alt="Hop Le" src="" />} title="Hop Le" />
          <CardContent>
            <Typography variant="body1">Answered Questions: 6</Typography>
            <Typography variant="body1">Created Questions: 3</Typography>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="flex-end">
              <Typography variant="body1">Score: 70</Typography>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LeaderCard;
