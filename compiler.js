let Web3 = require('web3');
let solc = require('solc');
let fs = require('fs');

let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));

let file = fs.readFileSync('Contracts.sol').toString();
console.log(file);

var input = {
    language: 'Solidity',
    sources: {
      'Contracts.sol': {
        content: file
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

let output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);

ABI = output.contracts['Contracts.sol']['Demo'].abi;
bytecode = output.contracts['Contracts.sol']['Demo'].evm.bytecode.object;
console.log('ABI: ', ABI);
console.log('Bytecode: ', bytecode);

ABI = output.contracts['Contracts.sol']['Demo2'].abi;
bytecode = output.contracts['Contracts.sol']['Demo2'].evm.bytecode.object;
console.log('ABI: ', ABI);
console.log('Bytecode: ', bytecode);