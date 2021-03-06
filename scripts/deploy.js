

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Decentragram = await hre.ethers.getContractFactory("Decentragram");
    const decentragram = await Decentragram.deploy();

    console.log("Decentragram address:", decentragram.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });