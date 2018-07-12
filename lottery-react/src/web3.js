import Web3 from 'web3';

//HighJack Provide from MetaMask and add in our web3 version
const web3 = new Web3(window.web3.currentProvider);
export default web3;
