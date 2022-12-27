const { expect } = require("chai");
const { ethers } = require("hardhat");

describe(" TaskContract " , () => {
  it("should run buyChai Func" , async() => {

  let Chai;
  let contract;
     let [owner, from1, from2, from3] =  ethers.getSigners();
     Chai = await ethers.getContractFactory("Chai");
     contract = await Chai.deploy(); //instance of contract
    
      console.log("Address of contract:", contract.address);
    
      let addresses = [
        owner.address,
        from1.address,
        from2.address,
        from3.address,
      ];
      console.log("Before buying chai");
      await cosoleBalances(addresses);


    let amount = { value: ethers.utils.parseEther("1") };
    await contract.connect(from1).buyChai("from1", "Very nice chai", amount);
    await contract.connect(from2).buyChai("from2", "Very nice course", amount);
    await contract
      .connect(from3)
      .buyChai("from3", "Very nice information", amount);
  
    console.log("After buying chai");
    await cosoleBalances(addresses);
    })
  
  })
 
