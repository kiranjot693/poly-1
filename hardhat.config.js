require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.12", // Corrected solidity version
  networks: {
    hardhat: {}, // Explicitly define the hardhat network
    mumbai : {
      url: 'https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
