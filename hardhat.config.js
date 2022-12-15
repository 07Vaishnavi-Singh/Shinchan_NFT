
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");


const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {

  

  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/iTm1Vd-gGL5r60Tha_nrITSth7jrBhre",
      accounts: [ 'b34f31e68fc2480c2aee45cebc0e70719fe13cb40d660338de1e5140bf0ede37' ]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}