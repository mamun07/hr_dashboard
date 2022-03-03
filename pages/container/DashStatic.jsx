import React from 'react'
import { Grid} from '@mui/material'
import { Card, LinearProgress, Typography } from '@mui/material'

export default function DashStatic() {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{padding: '20px'}}>
                    <Typography variant='h6' mb={2}>Static</Typography>
                    <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='p'>Today Leave</Typography>
                        <LinearProgress color="secondary" variant="determinate" value={80} />
                    </Card>
                    <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Today Leave</Typography>
                        <LinearProgress color="secondary" variant="determinate" value={80} />
                    </Card>
                    <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Today Leave</Typography>
                        <LinearProgress color="secondary" variant="determinate" value={80} />
                    </Card>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
                    <Typography variant='h6' mb={2}>Task</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{padding: '10px', marginBottom: '15px'}}>
                    <Typography variant='h6' mb={2}>Empolyee</Typography>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}
