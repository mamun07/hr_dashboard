import { Card, LinearProgress, Typography } from '@mui/material'
import React from 'react'

export default function TotalStatic() {

  return (
    <Card variant="outlined" sx={{padding: '20px'}}>
      <Typography variant='h5'>Static</Typography>
      <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
        <Typography variant='span'>Today Leave</Typography>
        <LinearProgress color="success" variant="determinate" value={80} />
      </Card>
      <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
        <Typography variant='span'>Today Leave</Typography>
        <LinearProgress color="success" variant="determinate" value={80} />
      </Card>
      <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
        <Typography variant='span'>Today Leave</Typography>
        <LinearProgress color="success" variant="determinate" value={80} />
      </Card>
    </Card>
  )
}
