
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));



export default function AttestationEffectiveness(props) {
  return (
    <RootStyle>
      <Typography variant="h3">{Math.round(props.attestationEffectiveness * 100)}%</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Effectiveness
      </Typography>
    </RootStyle>
  );
}
