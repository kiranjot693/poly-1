const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/ship.sol/ship.json");

const tokenAddress = "0x55e044ECDbeEBd0785C96FEe994eDBc2D7309aEa"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x746D818F4f239e57986d810a4d55526526414C5D"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
