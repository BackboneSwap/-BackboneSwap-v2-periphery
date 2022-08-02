import { ethers, run } from "hardhat";

async function main() {

  const Multicall2 = await ethers.getContractFactory("Multicall2");
  const multicall2 = await Multicall2.deploy();
  await multicall2.deployed();

  console.log('Multicall2 deployed to: ', multicall2.address);
  await run("verify:verify", {
    address: multicall2.address,
    constructorArguments: [],
    contract: 'contracts/test/Multicall2.sol:Multicall2'
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
