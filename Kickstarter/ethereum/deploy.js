const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledCampaignFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'catch mercy cool fade inflict what expose post cost advice theory coil',
  'https://rinkeby.infura.io/heoOV3Z535SBEWK03Kyp'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();
  console.log("Factory contract will be deployed using account: " + accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledCampaignFactory.interface))
    .deploy( { data : compiledCampaignFactory.bytecode })
    .send({ from: accounts[0], gas:"1000000" })

  console.log("Factory contract is deployed at the address:" + result.options.address);

};
deploy();
