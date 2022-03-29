import React, { useState } from 'react';
import {
  getvalidatorDetails,
  getValidatorEffectiveness,
  getAttestations,
  getPerformance,
  getValDailyStatus,
  getBalanceHistory,
  getEtherPrice
} from '../api/BeaconchaApi';
import '../App.css';
import NavBar from './NavBar';
import DashboardApp from './DashboardApp';
import { Container } from '@mui/material';
import { Grid } from 'semantic-ui-react';

function DataFetch() {
  const [pubKey, setpubKey] = useState('');
  const [vData, setvData] = useState({});
  const [vEff, setvEff] = useState({});
  const [vAttestations, setvAttestations] = useState([]);
  const [vPerformance, setvPerformance] = useState({});
  const [vBalanceHistory, setvBalanceHistory] = useState({});
  const [valDailyStat, setvalDailyStat] = useState({});
  const [ethPriceUSD, setethPriceUSD] = useState({});
  const [ethPriceEUR, setethPriceEUR] = useState({});
  const [ethPriceGBP, setethPriceGBP] = useState({});

  const [showDetails, setshowDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pubKey) {
      alert('Input field must not be empty');
      setshowDetails(false);
      return;
    }

    getvalidatorDetails(pubKey).then((result) => {
      if (result.data.status === 'OK') {
        setvData(result.data.data);
        setshowDetails(true);

        getValDailyStatus(result.data.data.validatorindex).then((result) => {
          setvalDailyStat(result.data.data);
        });
      } else {
        setshowDetails(false);
        alert('Public Key / Validator Index not found');
      }
    });

    getValidatorEffectiveness(pubKey).then((result) => {
      if (result.data.status === 'OK') {
        setvEff(result.data.data);
        setshowDetails(true);
      } else {
        setshowDetails(false);
      }
    });

    getAttestations(pubKey).then((result) => {
      if (result.data.status === 'OK') {
        setvAttestations(result.data.data);
        setshowDetails(true);
      } else {
        setshowDetails(false);
      }
    });

    getPerformance(pubKey).then((result) => {
      if (result.data.status === 'OK') {
        setvPerformance(result.data.data);
        setshowDetails(true);
      } else {
        setshowDetails(false);
      }
    });

    getBalanceHistory(pubKey).then((result) => {
      if (result.data.status === 'OK') {
        setvBalanceHistory(result.data.data);

        setshowDetails(true);
      } else {
        setshowDetails(false);
      }
    });
    getEtherPrice().then((result) => {
      setethPriceUSD(result.data[12]);
      setethPriceEUR(result.data[696]);
      setethPriceGBP(result.data[829]);
    });
  };

  return (
    <Container item xs={12} sm={12} md={12} lg={12}>
      <NavBar
        pubKey={pubKey}
        handleSubmit={handleSubmit}
        setpubKey={setpubKey}
        showDetails={showDetails}
      />
      {showDetails ? (
        <DashboardApp
          vData={vData}
          vEff={vEff}
          vAttestations={vAttestations}
          vPerformance={vPerformance}
          valDailyStat={valDailyStat}
          vBalanceHistory={vBalanceHistory}
          ethPriceUSD={ethPriceUSD}
          ethPriceEUR={ethPriceEUR}
          ethPriceGBP={ethPriceGBP}
          showDetails={showDetails}
          handleSubmit={handleSubmit}
          setpubKey={setpubKey}
        />
      ) : (
        ''
      )}
    </Container>
  );
}

export default DataFetch;
