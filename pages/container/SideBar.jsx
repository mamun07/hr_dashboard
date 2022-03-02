import React, {useState}from 'react'
import Link from 'next/link'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {Settings,SpeedRounded,SupervisorAccount,AccountBalance,More, ExpandLess, ExpandMore, Key, LockOpen} from '@mui/icons-material'

import { toast } from 'react-toastify'
import { CheckCircle } from '@mui/icons-material'

export default function SideBar() {
  
  const [open, setOpen] = useState(false);

  const handleClick = () => { 
    setOpen(!open); 
  };
  const DashWel = ()=>toast.success("Welcome to Dashboard!", { icon: CheckCircle });


  return (
    <List>
      <Link href="/">
        <ListItemButton onClick={DashWel}>
          <ListItemIcon> <SpeedRounded color='primary'/> </ListItemIcon>
          <ListItemText primary="Dashboard"/>
        </ListItemButton>
      </Link>
      <Link href="/empolyee">
        <ListItemButton>
          <ListItemIcon> <SupervisorAccount color='primary'/> </ListItemIcon>
          <ListItemText primary="Employee"/>
        </ListItemButton>
      </Link>
      <Link href="/settings">
        <ListItemButton>
          <ListItemIcon> <AccountBalance color='primary'/> </ListItemIcon>
            <ListItemText primary="Accounts"/>
        </ListItemButton>
      </Link>
      
      <Link href="/settings">
          <ListItemButton>
            <ListItemIcon> <More color='primary'/> </ListItemIcon>
              <ListItemText primary="Others"/>
          </ListItemButton>
      </Link>
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon> <Settings color='primary'/> </ListItemIcon>
        <ListItemText primary="Settings"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon> <Key color='primary'/> </ListItemIcon>
            <ListItemText primary="Permissions" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon> <LockOpen color='primary'/> </ListItemIcon>
            <ListItemText primary="Password" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
