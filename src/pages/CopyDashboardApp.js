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
  CopyStatus,
  CopyTableComponent,
  ChartLineComponent,
  ChartBarComponent,
  IncomeHistory,
  TableComponent
} from '../components/_dashboard/app';
// ----------------------------------------------------------------------

export default function CopyDashboardApp(props) {
  const { balance, status, index } = props.vData;
  const { pubkey, slashed, activation_eligibility_epoch, activation_epoch } = props.vData.validator;
  // const {headEpoch} = props.chainHeadData;
  return (
    <Page title="Launchnodes Dashboard">
      {console.log(props.headEp)}
      
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={12}>
            <ValidatorHeader validatorindex={index} pubkey={pubkey} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActivationEpoch activationepoch={activation_epoch} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Balance balance={balance} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CopyStatus status={status} slashed={slashed} />
          </Grid>
         

          <Grid item xs={12} md={6} lg={8}>
            <ValidatorTimeline
              activationepoch={activation_epoch}
              activationeligibilityepoch={activation_eligibility_epoch}
              status={status}
              slashed={slashed}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <CopyTableComponent attestationData={attestationData} balanceHistory={balanceHistory} />
          </Grid> */}

        </Grid>
      </Container>
    </Page>
  );
}
