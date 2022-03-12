import React, {useState} from 'react'
import { Button, Container, Grid, MenuItem, Paper, TextField, Typography} from '@mui/material'
import { Box } from '@mui/system'
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

import ModalUnstyled from '@mui/base/ModalUnstyled';
import InvestTable from './components/Table';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const currencies = [
  {
    value: 'Pending',
    label: 'Pending',
  },
  {
    value: 'Paid',
    label: 'Paid',
  },
  {
    value: 'Partial Paid',
    label: 'Partial Paid',
  }
];

export default function invoice() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currency, setCurrency] = useState('Paid');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container maxWidth='xxl'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my={4} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
            <Typography variant='h4'>Invoices</Typography>
            <Box>
            <Button onClick={handleOpen} variant="contained" sx={{bgcolor: 'secondary.main', color: 'primary.main'}}><AddIcon/> Create Invoices</Button>
              <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
              >
                <Paper sx={{p: 2}}>
                  <Typography variant='h5'>New Invoices </Typography>
                  <Typography variant='p'>Other Information</Typography>
                </Paper>
              </StyledModal>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            sx={{width: '100%', color: 'primary'}}
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{width: '100%', color: 'primary'}}
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{width: '100%', color: 'primary'}}
            select
            label="Status"
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}> Filter </Grid>
      </Grid>
      <Box>
        <InvestTable/>
      </Box>
    </Container>
  )
}
