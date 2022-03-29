// material
import { Grid, Container } from '@mui/material';

import Page from '../components/Page';
import {
  Balance,
  AttestationEffectiveness,
  Status,
  ActivationEpoch,
  ValidatorHeader,
  ValidatorTimeline,
  ChartLineComponent,
  ChartBarComponent,
  IncomeHistory,
  TableComponent
} from '../components/_dashboard/app';
// ----------------------------------------------------------------------

export default function DashboardApp(props) {
  const { balance, status, activationepoch, slashed, pubkey, activationeligibilityepoch } =
    props.vData;
  const { validatorindex } = props.vEff;
  const attestationEffectiveness = props.vEff.attestation_effectiveness;
  const attestationData = props.vAttestations;
  const performanceData = props.vPerformance;
  const balanceHistory = props.vBalanceHistory;
  const dailyStatus = props.valDailyStat;
  const ethPriceUSD = props.ethPriceUSD;
  const ethPriceEUR = props.ethPriceEUR;
  const ethPriceGBP = props.ethPriceGBP;
  return (
    <Page title="Launchnodes Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={12}>
            <ValidatorHeader validatorindex={validatorindex} pubkey={pubkey} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActivationEpoch activationepoch={activationepoch} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Balance balance={balance} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Status status={status} slashed={slashed} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {isNaN(attestationEffectiveness) === true ? (
              ''
            ) : (
              <AttestationEffectiveness attestationEffectiveness={attestationEffectiveness} />
            )}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <IncomeHistory
              performanceData={performanceData}
              ethPriceUSD={ethPriceUSD}
              ethPriceEUR={ethPriceEUR}
              ethPriceGBP={ethPriceGBP}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ValidatorTimeline
              activationepoch={activationepoch}
              activationeligibilityepoch={activationeligibilityepoch}
              status={status}
              slashed={slashed}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ChartLineComponent dailyStatus={dailyStatus} validatorindex={validatorindex} />
            <br />

            <ChartBarComponent dailyStatus={dailyStatus} validatorindex={validatorindex} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TableComponent attestationData={attestationData} balanceHistory={balanceHistory} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
