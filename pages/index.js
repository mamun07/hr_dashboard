import Dashinfo from "./container/Dashinfo";
import ChartInfo from "./container/ChartInfo";
import { Container, Grid, Typography } from "@mui/material";
import DashStatic from "./container/DashStatic";

export default function Home() {
  return (
    <>
      {/* Dashboard Summary */}
      <Container maxWidth="xxl" sx={{ mb: "20px" }}>
        {/* Dashboard welcome title */}
        <Grid container spacing={0} my={2}>
          <Grid item xs={12}>
            <Typography mb={1} variant="h4">
              Welcome to Dashboard!
            </Typography>
            <Typography variant="p">Dashboard</Typography>
          </Grid>
        </Grid>
        <Dashinfo />
      </Container>

      {/* Dashboard Chart map */}
      <Container maxWidth="xxl" sx={{ mb: "20px" }}>
        <ChartInfo />
      </Container>

      {/* Statistics area  */}
      <Container maxWidth="xxl" sx={{ mb: "20px" }}>
        <DashStatic />
      </Container>
    </>
  );
}
