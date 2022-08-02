import { ethers, run } from "hardhat";

async function main() {
    const signers = await ethers.getSigners();

    const WETH = await ethers.getContractFactory('WETH9');
    const weth = await WETH.deploy();
    await weth.deployed();

    console.log('WETH deployed to: ', weth.address);
    await run("verify:verify", {
        address: weth.address,
        constructorArguments: [],
        contract: 'contracts/test/WETH9.sol:WETH9'
    })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
