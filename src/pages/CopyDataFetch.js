import React, { useState } from 'react';
// import {
//   getvalidatorDetails,
//   getValidatorEffectiveness,
//   getAttestations,
//   getPerformance,
//   getValDailyStatus,
//   getBalanceHistory,
//   getEtherPrice
// } from '../api/BeaconchaApi';
import { getValidatorDetailsFromBeacon, getChainHeadData } from '../beaconAPI/BeaconchaApi';
import '../App.css';
import NavBar from './NavBar';
import CopyDashboardApp from './CopyDashboardApp';
import { Container } from '@mui/material';
import { Grid } from 'semantic-ui-react';

function CopyDataFetch() {
  const [pubKey, setpubKey] = useState('');
  const [vData, setvData] = useState({});
  const [headEp, setheadEp] = useState('');
  // const [vEff, setvEff] = useState({});
  // const [vAttestations, setvAttestations] = useState([]);
  // const [vPerformance, setvPerformance] = useState({});
  // const [vBalanceHistory, setvBalanceHistory] = useState({});
  // const [valDailyStat, setvalDailyStat] = useState({});
  // const [ethPriceUSD, setethPriceUSD] = useState({});
  // const [ethPriceEUR, setethPriceEUR] = useState({});
  // const [ethPriceGBP, setethPriceGBP] = useState({});

  const [showDetails, setshowDetails] = useState(false);

  // var headEp = 0; 
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(pubKey)
    if (!pubKey) {
      alert('Input field must not be empty');
      setshowDetails(false);
      return;
    }

    getValidatorDetailsFromBeacon(pubKey).then((result) => {
      if (result.status === 200) {
        setvData(result.data.data);
        setshowDetails(true);
       
      }
     
    });

    getChainHeadData().then((result) => {
      
      
      
      if(result.status === 200){
        setheadEp(result.data.headEpoch);
        // console.log(headEp);
        
      }
     
    });

    // getAttestations(pubKey).then((result) => {
    //   if (result.data.status === 'OK') {
    //     setvAttestations(result.data.data);
    //     setshowDetails(true);
    //   } else {
    //     setshowDetails(false);
    //   }
    // });

    // getPerformance(pubKey).then((result) => {
    //   if (result.data.status === 'OK') {
    //     setvPerformance(result.data.data);
    //     setshowDetails(true);
    //   } else {
    //     setshowDetails(false);
    //   }
    // });

    // getBalanceHistory(pubKey).then((result) => {
    //   if (result.data.status === 'OK') {
    //     setvBalanceHistory(result.data.data);

    //     setshowDetails(true);
    //   } else {
    //     setshowDetails(false);
    //   }
    // });
    // getEtherPrice().then((result) => {
    //   setethPriceUSD(result.data[12]);
    //   setethPriceEUR(result.data[696]);
    //   setethPriceGBP(result.data[829]);
    // });
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
        <CopyDashboardApp
          vData={vData}
          
          showDetails={showDetails}
          handleSubmit={handleSubmit}
          setpubKey={setpubKey}
          headEp = {headEp}
        />
      ) : (
        ''
      )}
      {/* {console.log(headEp)} */}
    </Container>
  );
}

export default CopyDataFetch;
