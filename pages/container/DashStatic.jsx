import React from 'react'
import { Avatar, Box, CircularProgress, Grid} from '@mui/material'
import { Card, LinearProgress, Typography } from '@mui/material'

export default function DashStatic() {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{p: '15px'}}>
                    <Typography variant='h6' mb={2}>Static</Typography>
                    <Card variant="outlined" sx={{p: '10px', mb: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Today Leave</Typography>
                        <LinearProgress color="info" variant="determinate" value={70} />
                    </Card>
                    <Card variant="outlined" sx={{p: '10px', mb: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Pending Invoice</Typography>
                        <LinearProgress color="secondary" variant="determinate" value={90} />
                    </Card>
                    <Card variant="outlined" sx={{p: '10px', mb: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Completed Projects</Typography>
                        <LinearProgress color="success" variant="determinate" value={10} />
                    </Card>
                    <Card variant="outlined" sx={{p: '10px', mb: '15px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Open Tickets</Typography>
                        <LinearProgress color="error" variant="determinate" value={62} />
                    </Card>
                    <Card variant="outlined" sx={{p: '10px'}}>
                        <Typography sx={{fontSize: '12px'}} variant='span'>Closed Tickets</Typography>
                        <LinearProgress color="success" variant="determinate" value={35} />
                    </Card>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{p: '15px'}}>
                    <Typography variant='h6' mb={2}>Task Statistics</Typography>
                    <Grid container spacing={2} pb={2}>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" sx={{ textAlign: 'center' , p: '14px', mb: '15px'}}>
                                <Typography sx={{fontSize: '12px'}} variant='span'>Total Tasks</Typography>
                                <Typography variant='h4'>385</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" sx={{ textAlign: 'center' , p: '14px', mb: '15px'}}>
                                <Typography sx={{fontSize: '12px'}} variant='span'>Overdue Tasks</Typography>
                                <Typography variant='h4'>19</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box variant='dev'>
                        <Box mb={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography display={'flex'} alignItems={'center'} variant='span'>
                                <CircularProgress size={20} sx={{marginRight: '10px'}} color="success" variant="determinate" value={80}/> Completed Tasks
                            </Typography>
                            <Typography variant='span'> 166 </Typography>
                        </Box>
                        <Box mb={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography display={'flex'} alignItems={'center'} variant='span'>
                                <CircularProgress size={20} sx={{marginRight: '10px'}} color="error" variant="determinate" value={78}/> Inprogress Tasks
                            </Typography>
                            <Typography variant='span'> 342 </Typography>
                        </Box>
                        <Box mb={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography display={'flex'} alignItems={'center'} variant='span'>
                                <CircularProgress size={20} sx={{marginRight: '10px'}} color='info' variant="determinate" value={95}/> On Hold Tasks
                            </Typography>
                            <Typography variant='span'> 34 </Typography>
                        </Box>
                        <Box mb={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography display={'flex'} alignItems={'center'} variant='span'>
                                <CircularProgress size={20} sx={{marginRight: '10px'}} color="secondary" variant="determinate" value={78}/> Pending Tasks
                            </Typography>
                            <Typography variant='span'> 23 </Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography display={'flex'} alignItems={'center'} variant='span'>
                                <CircularProgress size={20} sx={{marginRight: '10px'}} color="secondary" variant="determinate" value={89}/> Pending Tasks
                            </Typography>
                            <Typography variant='span'> 23 </Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{p: '15px'}}>
                    <Typography variant='h6' mb={2}>Empolyee</Typography>
                    <Card variant="outlined" sx={{padding: '10px'}}>
                        <Box>
                            <Avatar src='/3.jpg' alt='Emoplyee name' />
                            <Typography variant='h4'></Typography>
                        </Box>
                        <Typography variant='h4'>385</Typography>
                    </Card>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}
