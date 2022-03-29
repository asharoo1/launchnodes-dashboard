
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const TOTAL = 714000;

export default function ActivationEpoch(props) {
  return (
    <RootStyle>
      <Typography variant="h3">
        {props.activationepoch === 0 ? 'Genesis [0]' : props.activationepoch}
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Activation Epoch
      </Typography>
    </RootStyle>
  );
}
