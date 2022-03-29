import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardHeader } from '@mui/material';
import { Icon, Popup } from 'semantic-ui-react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  //   hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));
const CHART_HEIGHT = 230;
const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(7)
}));

export default function IncomeInUSD(props) {
  const { performance1d, performance7d, performance31d, performance365d } = props.performanceData;
  const ethPrice = props.ethPriceUSD.price;
  const dailyUsdIncome = ((performance1d * 0.000000001).toFixed(5) * ethPrice).toFixed(5);
  const weeklyUsdIncome = ((performance7d * 0.000000001).toFixed(5) * ethPrice).toFixed(5);
  const monthlyUsdIncome = ((performance31d * 0.000000001).toFixed(5) * ethPrice).toFixed(5);
  return (
    <Card>
      <CardHeader title="Income History in USD" align="center"></CardHeader>
      <ChartWrapperStyle>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="left">
                  <strong>Day</strong>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  style={performance1d > 0 ? { color: 'green' } : { color: 'red' }}
                >
                  {performance1d > 0 ? (
                    <strong>+{dailyUsdIncome} USD</strong>
                  ) : (
                    <strong>{dailyUsdIncome} USD</strong>
                  )}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="left">
                  <strong>Week</strong>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  style={performance1d > 0 ? { color: 'green' } : { color: 'red' }}
                >
                  {performance1d > 0 ? (
                    <strong>+{weeklyUsdIncome} USD</strong>
                  ) : (
                    <strong>{weeklyUsdIncome} USD</strong>
                  )}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="left">
                  <strong>Month</strong>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  style={performance1d > 0 ? { color: 'green' } : { color: 'red' }}
                >
                  {performance1d > 0 ? (
                    <strong>+{monthlyUsdIncome} USD</strong>
                  ) : (
                    <strong>{monthlyUsdIncome} USD</strong>
                  )}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="left">
                  <strong>
                    APR
                    <Popup
                      trigger={<Icon name="question circle outline" />}
                      content="Annual Percentage Rate - Estimated yearly return based on the last 7 days"
                      position="bottom left"
                    />
                  </strong>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  style={performance1d > 0 ? { color: 'green' } : { color: 'red' }}
                >
                  <strong>{Math.round((weeklyUsdIncome / (32 * ethPrice)) * 52 * 100)}%</strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ChartWrapperStyle>
      {' '}
    </Card>
  );
}
