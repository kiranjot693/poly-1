// This script batch mints criceket ERC721A tokens.

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = process.env.MyKey;

  // The URL of the network provider
  const networkAddress =
    'https://rpc.sepolia.ethpandaops.io';

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Tthe address of the deployed contract
  const contractAddress = "0xD6860570982c4193A31D36853765b1CFA1ed205f";

  // Get the contract factory and attach it to the signer
  const IndianNFT = await ethers.getContractFactory("ship", signer);
  const contract = await IndianNFT.attach(contractAddress);

  const gasLimit = 3000000; // Adjust this value based on your contract's requirements
  const maxFeePerGas = ethers.utils.parseUnits("35", "gwei");
  const maxPriorityFeePerGas = ethers.utils.parseUnits("2", "gwei");

  const tx = await contract.mint(5, {
    gasLimit: gasLimit,
    maxFeePerGas: maxFeePerGas,
    maxPriorityFeePerGas: maxPriorityFeePerGas,
  });
  // Call the mint function on the contract to mint 5 tokens
  await tx.wait();

  // Log a message to the console to indicate that the tokens have been minted
  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
