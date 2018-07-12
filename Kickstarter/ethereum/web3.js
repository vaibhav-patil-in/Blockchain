import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //We are in Browser and MetaMask is Installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on Browser and MetaMask is Not Installed
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/heoOV3Z535SBEWK03Kyp');
  web3 = new Web3(provider);
}

export default web3;
