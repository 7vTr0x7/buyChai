const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("Chai");
  const contract = await Chai.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:",contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});