import React from "react";
import { Typography, Grid, Card, IconButton, Box } from "@mui/material";
import {
  IoCopyOutline,
  IoDiamondOutline,
  IoPersonAddOutline,
  IoUnlinkOutline,
} from "react-icons/io5";

export default function Dashinfo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={3}>
        <Card
          variant="outlined"
          sx={{
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            disableRipple
            size="large"
            sx={{
              backgroundColor: "secondary.light2",
              color: "secondary.main",
            }}
          >
            <IoCopyOutline />
          </IconButton>
          <Box sx={{ textAlign: "right" }}>
            <Typography fontSize={30} fontWeight="900" color="secondary.main">
              124
            </Typography>
            <Typography variant="p">Projects</Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card
          variant="outlined"
          sx={{
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            disableRipple
            size="large"
            sx={{
              backgroundColor: "secondary.light2",
              color: "secondary.main",
            }}
          >
            <IoUnlinkOutline sx={{ fontSize: 50 }} />
          </IconButton>
          <Box sx={{ textAlign: "right" }}>
            <Typography fontSize={30} fontWeight="900" color="secondary.main">
              {" "}
              12{" "}
            </Typography>
            <Typography variant="p">Clients</Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card
          variant="outlined"
          sx={{
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            disableRipple
            size="large"
            sx={{
              backgroundColor: "secondary.light2",
              color: "secondary.main",
            }}
          >
            <IoDiamondOutline sx={{ fontSize: 50 }} />
          </IconButton>
          <Box sx={{ textAlign: "right" }}>
            <Typography fontSize={30} fontWeight="900" color="secondary.main">
              {" "}
              43{" "}
            </Typography>
            <Typography variant="p">Tasks</Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card
          variant="outlined"
          sx={{
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            disableRipple
            size="large"
            sx={{
              backgroundColor: "secondary.light2",
              color: "secondary.main",
            }}
          >
            <IoPersonAddOutline sx={{ fontSize: 50 }} />
          </IconButton>
          <Box sx={{ textAlign: "right" }}>
            <Typography fontSize={30} fontWeight="900" color="secondary.main">
              {" "}
              114{" "}
            </Typography>
            <Typography variant="p">Employees</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
