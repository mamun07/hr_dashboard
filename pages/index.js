import Dashinfo from './container/Dashinfo';
import ChartInfo from './container/ChartInfo';
import { Container, Grid, Typography } from '@mui/material';

export default function Home() {
  
  return (
    <>
      {/* Dashboard Summary */}
      <Container maxWidth='xxl' sx={{marginBottom: '50px'}}>
          {/* Dashboard welcome title */}
          <Grid container spacing={0} mb={3}>
            <Grid item xs={12}>
              <Typography  mb={1} variant='h4'>Welcome to Admin!</Typography>
              <Typography variant='p'>Dashboard</Typography>
            </Grid>
          </Grid>
          <Dashinfo/>
      </Container>

      {/* Dashboard Chart map */}
      <Container maxWidth="xxl" sx={{marginBottom: '50px'}}>
        <ChartInfo/>
      </Container>

      {/* Dashboard empolyee  */}
      <Container maxWidth='xxl' sx={{marginBottom: '50px'}}>
          <Grid container spacing={0} mb={3}>
            <Grid item xs={12}>
              <Typography variant='p'>Empolyee</Typography>
            </Grid>
          </Grid>
      </Container>


    </>
  )
}
