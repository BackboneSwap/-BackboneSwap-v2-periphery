import * as dotenv from 'dotenv'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.6', settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      }
    ]
  },

  networks: {
    ivarextestnet: {
      url: 'https://testnet.ivarex.com',
      chainId: 16888,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    ivarex: {
      url: 'https://mainnet.ivarex.com',
      chainId: 88888,
      accounts: process.env.PRIVATE_KEY_DEPLOY_IVAREX ? [process.env.PRIVATE_KEY_DEPLOY_IVAREX] : []
    },
    bitkubtestnet: {
      url: 'https://rpc-testnet.bitkubchain.io',
      chainId: 25925,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
  },
  etherscan: {
    apiKey: {
      ivarex: 'ivarex',
      ivarextestnet: ':D',
      bitkubtestnet: 'bitkubtestnet'
    },
    customChains: [
      {
        network: 'ivarextestnet',
        chainId: 16888,
        urls: {
          apiURL: 'https://testnet.ivarscan.com/api',
          browserURL: 'https://testnet.ivarscan.com/'
        }
      },
      {
        network: 'ivarex',
        chainId: 88888,
        urls: {
          apiURL: 'https://ivarscan.com/api',
          browserURL: 'https://ivarscan.com/'
        }
      },
      {
        network: 'bitkubtestnet',
        chainId: 25925,
        urls: {
          apiURL: 'https://testnet.bkcscan.com/api',
          browserURL: 'https://testnet.bkcscan.com/'
        }
      },
    ]
  }
};

export default config;