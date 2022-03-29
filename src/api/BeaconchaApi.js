import axios from 'axios';

export function getvalidatorDetails(pubKey) {
  return axios.get(`https://beaconcha.in/api/v1/validator/${pubKey}`);
}
export function getValidatorEffectiveness(pubKey) {
  return axios.get(`https://beaconcha.in/api/v1/validator/${pubKey}/attestationeffectiveness`);
}
export function getAttestations(pubKey) {
  return axios.get(`https://beaconcha.in/api/v1/validator/${pubKey}/attestations`);
}

export function getPerformance(pubKey) {
  return axios.get(`https://beaconcha.in/api/v1/validator/${pubKey}/performance`);
}

export function getBalanceHistory(pubKey) {
  return axios.get(`https://beaconcha.in/api/v1/validator/${pubKey}/balancehistory`);
}

export function getValDailyStatus(valIndex) {
  return axios.get(`https://beaconcha.in/api/v1/validator/stats/${valIndex}`);
}

export function getEtherPrice() {
  return axios.get(`https://api2.binance.com/api/v3/ticker/price`);
}
