import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Settings,
  SpeedRounded,
  SupervisorAccount,
  AccountBalance,
  ContentCopy,
  ExpandLess,
  ExpandMore,
  AddShoppingCart,
} from "@mui/icons-material";

import { toast } from "react-toastify";
import { CheckCircle } from "@mui/icons-material";

export default function SideBar() {
  const DashWel = () =>
    toast.success("Welcome to Dashboard!", { icon: CheckCircle });

  const [setting, setSetting] = useState(false);
  const settingClick = () => setSetting(!setting);

  const [account, setAccount] = useState(false);
  const accountClick = () => setAccount(!account);

  const [empolyee, setEmpolyee] = useState(false);
  const empolyeeClick = () => setEmpolyee(!empolyee);

  const [sales, setSeles] = useState(false);
  const salesClick = () => setSeles(!sales);

  return (
    <List>
      <Link href="/">
        <ListItemButton onClick={DashWel}>
          <ListItemIcon sx={{ color: "secondary.text" }}>
            <SpeedRounded />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={salesClick}>
        <ListItemIcon sx={{ color: "secondary.text" }}>
          <AddShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {sales ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={sales} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }} component="div" disablePadding>
          <Link href="/invoice">
            <ListItemButton>
              <ListItemText primary="Invoices" />
            </ListItemButton>
          </Link>
          <Link href="/invoice">
            <ListItemButton>
              <ListItemText primary="Payments" />
            </ListItemButton>
          </Link>
          <Link href="/invoice">
            <ListItemButton>
              <ListItemText primary="Expenses" />
            </ListItemButton>
          </Link>
          <Link href="/invoice">
            <ListItemButton>
              <ListItemText primary="Provident Fund" />
            </ListItemButton>
          </Link>
          <Link href="/invoice">
            <ListItemButton>
              <ListItemText primary="Taxes" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={empolyeeClick}>
        <ListItemIcon sx={{ color: "secondary.text" }}>
          <SupervisorAccount />
        </ListItemIcon>
        <ListItemText primary="Employee" />
        {empolyee ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={empolyee} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }} component="div" disablePadding>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="All Employee" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Salary" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Scheduling" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Overtime" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Department" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Performance" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Promotion" />
            </ListItemButton>
          </Link>
          <Link href="/empolyee">
            <ListItemButton>
              <ListItemText primary="Termination" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton onClick={accountClick}>
        <ListItemIcon sx={{ color: "secondary.text" }}>
          <AccountBalance />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
        {account ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={account} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }} component="div" disablePadding>
          <Link href="/accounts">
            <ListItemButton>
              <ListItemText primary="Budgets" />
            </ListItemButton>
          </Link>
          <Link href="/accounts">
            <ListItemButton>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </Link>
          <Link href="/accounts">
            <ListItemButton>
              <ListItemText primary="Budgets Expenses" />
            </ListItemButton>
          </Link>
          <Link href="/accounts">
            <ListItemButton>
              <ListItemText primary="Budgets Revenues" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <Link href="/assets">
        <ListItemButton>
          <ListItemIcon sx={{ color: "secondary.text" }}>
            <ContentCopy />
          </ListItemIcon>
          <ListItemText primary="Assets" />
        </ListItemButton>
      </Link>

      <ListItemButton onClick={settingClick}>
        <ListItemIcon sx={{ color: "secondary.text" }}>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {setting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={setting} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }} component="div" disablePadding>
          <Link href="/settings">
            <ListItemButton>
              <ListItemText primary="Permissions" />
            </ListItemButton>
          </Link>
          <Link href="/settings">
            <ListItemButton>
              <ListItemText primary="Password" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}
