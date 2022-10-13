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
      accounts: process.env.PRIVATE_KEY_DEPLOY_MULTICALL ? [process.env.PRIVATE_KEY_DEPLOY_MULTICALL] : []
    },
    ivarex: {
      url: 'https://mainnet.ivarex.com',
      chainId: 88888,
      accounts: process.env.PRIVATE_KEY_DEPLOY_WETH ? [process.env.PRIVATE_KEY_DEPLOY_WETH] : []
    },
    bitkubtestnet: {
      url: 'https://rpc-testnet.bitkubchain.io',
      chainId: 25925,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    velastestnet: {
      url: 'https://testnet.velas.com/rpc/',
      chainId: 111,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    reitestnet: {
      url: 'https://rei-testnet-rpc.moonrhythm.io',
      chainId: 55556,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: {
      ivarex: 'ivarex',
      ivarextestnet: ':D',
      bitkubtestnet: 'bitkubtestnet',
      velastestnet: 'velastestnet',
      reitestnet: 'reitestnet'
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
      {
        network: 'velastestnet',
        chainId: 111,
        urls: {
          apiURL: 'https://explorer.testnet.velas.com/api',
          browserURL: 'https://evmexplorer.testnet.velas.com'
        }
      },
      {
        network: 'reitestnet',
        chainId: 55556,
        urls: {
          apiURL: 'https://testnet.reiscan.com/api',
          browserURL: 'https://testnet.reiscan.com'
        }
      },
    ]
  }
};

export default config;