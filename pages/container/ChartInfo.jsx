import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import RevChart from '../components/RevChart'
import SaleChart from '../components/SaleChart'

export default function ChartInfo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card variant="outlined" sx={{padding: '20px'}}>
          <Typography variant='h6' sx={{textAlign: 'center'}}>Total Revenue</Typography>
          <RevChart />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card variant="outlined" sx={{padding: '20px'}}>
          <Typography variant='h6' sx={{textAlign: 'center'}}>Sales Overview</Typography>
          <SaleChart />
        </Card>
      </Grid>
    </Grid>
  )
}
