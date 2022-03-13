import React, {useState} from 'react'
import { Button, Container, Grid, Paper, Typography} from '@mui/material'
import { Box } from '@mui/system'
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

import ModalUnstyled from '@mui/base/ModalUnstyled';
import InvoiceTable from './components/Table';
import InvoiceFilter from './container/InvoiceFilter';

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

export default function invoice() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth='xxl'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my={4} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
            <Typography variant='h4'>Invoices</Typography>
            <Box>
              <Button 
                onClick={handleOpen}
                variant="contained"
                sx={{bgcolor: 'secondary.main', color: 'primary.text'}}
              >
                <AddIcon/> Create Invoice
              </Button>
              <StyledModal
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
      <Box>
        <InvoiceTable/>
      </Box>
    </Container>
  )
}
