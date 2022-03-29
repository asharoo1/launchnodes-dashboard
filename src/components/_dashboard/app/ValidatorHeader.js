import * as React from 'react';

import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { Icon, Popup } from 'semantic-ui-react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AlertComponent from './AlertComponent';
import CurrencySelect from './CurrencySelect';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'left',

  color: theme.palette.info.darker,
  backgroundColor: '#e5efff'
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

// ----------------------------------------------------------------------

export default function ValidatorHeader(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <RootStyle>
      <Typography variant="h2">
        Validator {props.validatorindex}
        <Popup
          trigger={
            <Icon
              name="copy"
              size="small"
              style={{ cursor: 'pointer', marginTop: '7px', marginLeft: '5px' }}
              onClick={() => navigator.clipboard.writeText(props.pubkey)}
            />
          }
          content="Copied"
          on="click"
          size="small"
        />
        <Popup
          trigger={
            <Icon
              name="alarm"
              size="small"
              style={{ cursor: 'pointer', marginTop: '7px', marginLeft: '5px' }}
              onClick={handleOpen}
            ></Icon>
          }
          content="Set Alert"
          size="small"
        />
        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Subscribe to alerts
              </Typography>

              <AlertComponent validatorindex={props.validatorindex} />
            </Box>
          </Fade>
        </Modal>
        {/* <AlertModal/> */}
      </Typography>
      
      <Typography variant="h5">{props.pubkey}</Typography>
    </RootStyle>
  );
}
