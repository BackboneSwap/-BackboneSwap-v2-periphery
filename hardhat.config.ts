import * as dotenv from 'dotenv'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const {
  getEtherscanEndpoints,
} = require('@nomiclabs/hardhat-etherscan/dist/src/network/prober')

dotenv.config()

const chainConfig: any = {
  ivarextestnet: {
    chainId: 16888,
    urls: {
      apiURL: 'https://testnet.ivarscan.com/api',
      browserURL: 'https://testnet.ivarscan.com/'
    }
  }
}

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
    }
  },
  etherscan: {
    apiKey: {
      ivarextestnet: ':D'
    },
    customChains: [
      {
        network: 'ivarextestnet',
        chainId: 16888,
        urls: {
          apiURL: 'https://testnet.ivarscan.com/api',
          browserURL: 'https://testnet.ivarscan.com/'
        }
      }
    ]
  }
};

export default config;