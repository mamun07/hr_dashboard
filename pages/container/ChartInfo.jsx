import React from 'react'
import Chart from '../components/Chart'
import { Card, Grid, Typography } from '@mui/material'

export default function ChartInfo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card variant="outlined" sx={{padding: '20px'}}>
          <Typography variant='h6' sx={{textAlign: 'center'}}>Total Revenue</Typography>
          <Chart />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card variant="outlined" sx={{padding: '20px'}}>
          <Typography variant='h6' sx={{textAlign: 'center'}}>Sales Overview</Typography>
          <Chart />
        </Card>
      </Grid>
    </Grid>
  )
}
