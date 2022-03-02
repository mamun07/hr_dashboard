import React from 'react'
import { Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Menu, Notifications, Settings } from '@mui/icons-material'

export default function TopBar() {
  return (
    <Box sx={{backgroundColor: 'primary.dark', color: 'primary.main'}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> <Menu/> </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Fortunetech </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <Tooltip title="Notifications">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={12} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Settings">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="error">
                <Settings/>
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Profile">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Avatar alt="Fortunetech Image" src="./3.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </Box>
  )
}
