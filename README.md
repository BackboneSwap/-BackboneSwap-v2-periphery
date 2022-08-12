# Backbone Swap
### Scripts
1. Install packages

```shell
npm install
```
2. Compile Smart Contract
```shell
npx hardhat compile
```
3. Deploy Smart Contract
```shell
npx hardhat run scripts/deploy_weth.ts --network <network name>
npx hardhat run scripts/deploy.ts --network <network name>
npx hardhat run scripts/deploy_multicall.ts --network <network name>
```
4. Flatten Smart Contract
```shell
npx hardhat flatten contracts/BackboneswapV2Router02.sol > flattens/BackboneswapV2Router02.sol
```