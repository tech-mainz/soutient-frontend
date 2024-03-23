import React, { useState } from "react";
import "./CampaignsFeed.css";
import { ethers } from "ethers";
import { Abi } from "../../utils/Abi";
import { contractId as contractAddress } from "../../utils/urls";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, Abi, provider);
const CampaignCard = ({ campaign }) => {
  const [currCampaign, setCampaign] = useState();
  const handleDonate = async () => {
    try {
      // Prompt the user to enter the donation amount
      const donationAmount = prompt("Enter donation amount:");
      if (!donationAmount || isNaN(donationAmount)) {
        alert("Invalid donation amount.");
        return;
      }

      // Convert donation amount to wei
      const weiAmount = ethers.utils.parseEther(donationAmount);

      // Get MetaMask signer
      const signer = provider.getSigner();

      // Send transaction to donate to the campaign owner
      const tx = await signer.sendTransaction({
        to: campaign.owner, // Owner's address
        value: weiAmount,
      });

      // Wait for transaction to be confirmed
      await tx.wait();

      alert("Donation successful!");
    } catch (error) {
      console.error("Error donating to campaign:", error.message);
      alert("Error donating to campaign. Please try again.");
    }
  };

  return (
    <div className="campaign__list_card">
      <img src={campaign.image} alt="" />
      <div className="campaign__feed_card_body">
        <div className="feed_card_body_text">
          <p>
            <span className="tag__val">Target:</span>{" "}
            {campaign.target.toString()}
          </p>
        </div>
            <button onClick={handleDonate} className="submit__button">Donate</button>
      </div>
    </div>
  );
};

export default CampaignCard;
