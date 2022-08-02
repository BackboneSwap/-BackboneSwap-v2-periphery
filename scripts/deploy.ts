import { ethers, run } from "hardhat";

const factory = '0xb06ab8c9D841685951c119D0684C20a7E37af8C9';
const weth = '0x6e3B32f4b5353aEfA9784c95a8247a6C3D671bE1';

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
