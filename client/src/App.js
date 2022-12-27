import { useState, useEffect } from "react";
import { ethers } from "ethers";
import chaiABI from "./Utils/Chai.json";

import { Buy, Memo } from "./Components/index";

import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [currentAccount, setCurrentAccount] = useState("");

  const [account, setAccount] = useState("None");

  const connectWallet = async () => {
    const contractAddress = "0x9a852781e0d5167580cC62aAF7E9D4a439B1Abba";
    const contractABI = chaiABI.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setCurrentAccount(account[0]);

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setAccount(account);
        setState({ provider, signer, contract });
       
        const network = await provider.getNetwork(); const chainId = network.chainId;

      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
  connectWallet();
  }, []);

  // console.log(state);

  return (
    <div>
  {currentAccount === '' ? (
  <button
  className='connect'
  onClick={connectWallet}
  >
  Connect Wallet
  </button>
  ) : (
      <div style={{ height: "100%" }}>
        <p
          className="text-muted lead "
          style={{ marginTop: "10px", marginLeft: "5px" }}
        >
          <small className="acc">Connected Account : {account}</small>
        </p>
        <div className="container">
          <Buy state={state} />
          <Memo state={state} />
        </div>
      </div>
        )}
    </div>
  );
}

export default App;
