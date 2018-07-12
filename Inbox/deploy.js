const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'catch mercy cool fade inflict what expose post cost advice theory coil',
  'https://rinkeby.infura.io/heoOV3Z535SBEWK03Kyp'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();
  console.log("Contract will be deployed using account: " + accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data : bytecode, arguments:['Hi There!'] })
    .send({ from: accounts[0], gas:"1000000" })

  console.log("Contract is deployed at the address:" + result.options.address);

};
deploy();
