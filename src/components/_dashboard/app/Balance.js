import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));




export default function Balance(props) {
  return (
    <RootStyle>
      <Typography variant="h3">{(props.balance * 0.000000001).toFixed(5)} ETH</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Balance
      </Typography>
    </RootStyle>
  );
}
