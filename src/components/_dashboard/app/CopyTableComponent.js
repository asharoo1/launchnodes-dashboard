import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardHeader } from '@mui/material';
import { Icon } from 'semantic-ui-react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
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
const CHART_HEIGHT = 600;
const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2)
}));

export default function CopyTableComponent(props) {
  const attestationData = props.attestationData;

  return (
    <Card>
      <CardHeader title="Attestation Details" align="center"></CardHeader>
      <ChartWrapperStyle>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">
                  <h5>
                    <strong>Epoch</strong>
                  </h5>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <h5>
                    <strong>Status</strong>
                  </h5>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {Object.keys(attestationData).map((keyName, i) => {
                return (
                  <StyledTableRow key={i}>
                    <StyledTableCell style={{ textAlign: 'center' }} positive>
                      {attestationData[keyName].epoch}
                    </StyledTableCell>

                    <StyledTableCell style={{ textAlign: 'center' }}>
                      {attestationData[keyName].status === 1 ? (
                        <Icon name="checkmark" color="green">
                          Attested
                        </Icon>
                      ) : (
                        <Icon name="close" color="red">
                          Missed
                        </Icon>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </ChartWrapperStyle>
    </Card>
  );
}
