import axios from 'axios';


export async function getValidatorDetailsFromBeacon(pubKey) {
  return await axios.get(`http://52.15.179.64:3500/eth/v1/beacon/states/head/validators/${pubKey}`);
}

export async function getChainHeadData() {
  return await axios.get(`http://52.15.179.64:3500/eth/v1alpha1/beacon/chainhead`);
}