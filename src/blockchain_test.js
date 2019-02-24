const Web3 = require('web3');
const config = require('config');
const contractDefinition = require('./api/models/patientConsent/patientConsent.json');

const uri = `${config.ethereum.transport}://${config.ethereum.host}:${config.ethereum.port}`;
console.log(uri);

const web3 = new Web3(new Web3.providers.HttpProvider(uri));
const consentContract = new web3.eth.Contract(contractDefinition, config.ethereum.contractAddress);

async function dostuff() {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  await consentContract.deploy({ data: '0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008060006101000a81548160ff021916908360ff1602179055506104e28061007c6000396000f3fe60806040526004361061005c576000357c010000000000000000000000000000000000000000000000000000000090048063488d4b3e14610061578063663334f8146100d057806368ce4ed11461013f5780638da5cb5b146101ae575b600080fd5b34801561006d57600080fd5b506100ba6004803603604081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610205565b6040518082815260200191505060405180910390f35b3480156100dc57600080fd5b50610129600480360360408110156100f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061031d565b6040518082815260200191505060405180910390f35b34801561014b57600080fd5b506101986004803603604081101561016257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610378565b6040518082815260200191505060405180910390f35b3480156101ba57600080fd5b506101c3610490565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208190555060008081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550507fd8e29fedbb2a2958d33c3f14227af010707eec471450f50045c1f11295ab431c826040518082815260200191505060405180910390a1600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b600060018060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208190555060008081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550507f1cd631c568600dd6c03398fbb1296e3cca52300d44f04cbe5050719f796b4f07826040518082815260200191505060405180910390a1600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820c3e9b701efed3f21083e249844806bad23bf5179b82264707b23411aec0460870029' })
    .send({ from: config.ethereum.defaultAddress, gas: 1500000,  }, (error, transactionHash) => {
      console.log(error);
      console.log(transactionHash);
    })
    .then((instance) => {
      console.log('foo');
      console.log(instance);
    })
    .catch((err) => {
      console.log(err);
    });

}

dostuff();

console.log('fin');
