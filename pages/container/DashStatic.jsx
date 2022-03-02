import React from 'react'
import { Grid} from '@mui/material'
import TotalStatic from '../components/TotalStatic'
import TaskStatic from '../components/TaskStatic'
import AbsentStatic from '../components/AbsentStatic'

export default function DashStatic() {
  return (
    <>
        <Grid container spacing={2} mb={3}>
            <Grid item xs={4}>
                <TotalStatic />
            </Grid>
            <Grid item xs={4}>
                <TaskStatic />
            </Grid>
            <Grid item xs={4}>
                <AbsentStatic />
            </Grid>
        </Grid>
    </>
  )
}
