import { ethers, run } from "hardhat";

const factory = '0x353AEecAB2B047e2Cae0BC0533f2beCDf52540e4';
const weth = '0x2c2D1197D38adaf6D08A301d5cFeEBDd8c4389e6';

async function main() {

  const BackboneswapV2Router02 = await ethers.getContractFactory("BackboneswapV2Router02");
  const backboneswapV2Router02 = await BackboneswapV2Router02.deploy(factory, weth);
  await backboneswapV2Router02.deployed();

  console.log('BackboneswapV2Router02 deployed to: ', backboneswapV2Router02.address);
  await run("verify:verify", {
    address: backboneswapV2Router02.address,
    constructorArguments: [factory, weth],
    contract: 'contracts/BackboneswapV2Router02.sol:BackboneswapV2Router02'
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
