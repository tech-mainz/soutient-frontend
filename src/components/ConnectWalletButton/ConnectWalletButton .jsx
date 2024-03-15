import React from "react";
import { ethers } from "ethers";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
const ConnectWalletButton = () => {
  const { isAuthenticated, setIsAuthenticated, userAddress, setAddress } =
    useContext(UserContext);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setIsAuthenticated(true);
        setAddress(address);
        window.localStorage.setItem("userAddress",address);
        console.log("Connected account:", userAddress);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert(
        "Metamask is not installed. Please install Metamask to use this application."
      );
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Connected with address: {userAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
