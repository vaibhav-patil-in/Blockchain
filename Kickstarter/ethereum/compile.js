const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//Remove Build Direcotry is exist
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//Read the contracts
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'UTF8');
const output = solc.compile(source, 1).contracts;

//Create Build Directory
fs.ensureDirSync(buildPath);

//Write the output JSON contracts in build folder
for (let contract in output) {
  fs.outputJsonSync(path.resolve(buildPath, contract.replace(':','') +'.json'), output[contract]);
}
