import React, {useState}from 'react'
import Link from 'next/link'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {Settings,SpeedRounded,SupervisorAccount,AccountBalance,More, ExpandLess, ExpandMore, Key, LockOpen, AddShoppingCart, Inventory2Outlined} from '@mui/icons-material'

import { toast } from 'react-toastify'
import { CheckCircle } from '@mui/icons-material'

export default function SideBar() {
  const DashWel = ()=>toast.success("Welcome to Dashboard!", { icon: CheckCircle });

  const [setting, setSetting] = useState(false);
  const settingClick = () => setSetting(!setting);

  const [account, setAccount] = useState(false);
  const accountClick = () => setAccount(!account);

  const [empolyee, setEmpolyee] = useState(false);
  const empolyeeClick = () => setEmpolyee(!empolyee);

  return (
    <List>
      <Link href="/">
        <ListItemButton onClick={DashWel}>
          <ListItemIcon> <SpeedRounded color='primary'/> </ListItemIcon>
          <ListItemText primary="Dashboard"/>
        </ListItemButton>
      </Link>
      <Link href="/settings">
        <ListItemButton>
          <ListItemIcon> <AddShoppingCart color='primary'/> </ListItemIcon>
            <ListItemText primary="Sales"/>
        </ListItemButton>
      </Link>
      <Link href="/settings">
        <ListItemButton>
          <ListItemIcon> <Inventory2Outlined color='primary'/> </ListItemIcon>
            <ListItemText primary="Performance"/>
        </ListItemButton>
      </Link>
      <ListItemButton onClick={empolyeeClick}>
        <ListItemIcon> <SupervisorAccount color='primary'/> </ListItemIcon>
        <ListItemText primary="Employee"/>
        {empolyee ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={empolyee} timeout="auto" unmountOnExit>
        <List sx={{pl: 4}} component="div" disablePadding>
          <Link href="/empolyee">
            <ListItemButton> <ListItemText primary="All Employee" /> </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton> <ListItemText primary="Scheduling" /> </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton> <ListItemText primary="Overtime" /> </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton> <ListItemText primary="Department" /> </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton onClick={accountClick}>
        <ListItemIcon> <AccountBalance color='primary'/> </ListItemIcon>
        <ListItemText primary="Accounts"/>
        {account ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={account} timeout="auto" unmountOnExit>
        <List sx={{pl: 4}} component="div" disablePadding>
          <ListItemButton> <ListItemText primary="Budgets" /> </ListItemButton>
          <ListItemButton> <ListItemText primary="Categories" /> </ListItemButton>
          <ListItemButton> <ListItemText primary="Budgets Expenses" /> </ListItemButton>
          <ListItemButton> <ListItemText primary="Budgets Revenues" /> </ListItemButton>
        </List>
      </Collapse>
      <Link href="/settings">
        <ListItemButton>
          <ListItemIcon> <More color='primary'/> </ListItemIcon>
            <ListItemText primary="Others"/>
        </ListItemButton>
      </Link>
      <ListItemButton onClick={settingClick}>
        <ListItemIcon> <Settings color='primary'/> </ListItemIcon>
        <ListItemText primary="Settings"/>
        {setting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={setting} timeout="auto" unmountOnExit>
        <List sx={{pl: 4}} component="div" disablePadding>
          <ListItemButton>
            <ListItemText primary="Permissions" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Password" />
          </ListItemButton>
        </List>
      </Collapse>

    </List>
  )
}
