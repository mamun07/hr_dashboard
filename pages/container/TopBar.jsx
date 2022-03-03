import React from 'react'
import { Avatar, Badge, Box, IconButton, Tooltip } from '@mui/material'
import { Notifications, Settings } from '@mui/icons-material'

export default function TopBar() {
  return (
    <Box sx={{ display:'flex', alignItems: 'center' }}>
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
  )
}
