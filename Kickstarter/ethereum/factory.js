import web3 from './web3';
const CampaignFactory = require('./build/CampaignFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xff09d2b013A4FbFd1feF9166711fc53C90b884b9'
);

export default instance;
