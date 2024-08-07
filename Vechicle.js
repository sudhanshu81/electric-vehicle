const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Connect to local Ethereum node

const contractABI = [ /* ABI from compiled smart contract */ ];
const contractAddress = '0xYourContractAddress';
const contract = new web3.eth.Contract(contractABI, contractAddress);

const account = '0xYourAccountAddress'; // Replace with your Ethereum account address

// Register a new vehicle
async function registerVehicle(vin, owner, make, model, year) {
    await contract.methods.registerVehicle(vin, owner, make, model, year)
        .send({ from: account });
    console.log('Vehicle registered successfully');
}

// Get vehicle details
async function getVehicle(vin) {
    const vehicle = await contract.methods.getVehicle(vin).call();
    console.log('Vehicle details:', vehicle);
}
