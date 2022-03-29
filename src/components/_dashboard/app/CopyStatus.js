import { Icon } from '@iconify/react';

import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { Popup } from 'semantic-ui-react';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));



// ----------------------------------------------------------------------


export default function CopyStatus(props) {
  return (
    <RootStyle>
      <Typography variant="h3">
        {props.status === 'active_ongoing' ? (
          <Popup
            trigger={<Icon icon="eva:power-outline" color="green" />}
            content="Your Validator is Active"
            style={{ backgroundColor: '#E5EFFF' }}
          />
        ) : props.status === 'active_offline' ? (
          <Popup
            trigger={<Icon icon="eva:power-outline" color="red" />}
            content="Your Validator is Offline"
            style={{ backgroundColor: '#E5EFFF' }}
          />
        ) : (
          props.status
        )}{' '}
        | {props.slashed ? 'Slashed' : 'Not Slashed'}
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Status
      </Typography>
    </RootStyle>
  );
}
