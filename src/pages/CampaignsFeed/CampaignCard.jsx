import React, { useState, useContext } from "react";
import "./CampaignsFeed.css";
import { ethers } from "ethers";
import { Abi } from "../../utils/Abi";
import { contractId as contractAddress } from "../../utils/urls";
import axios from "axios";
import { soutientBackendUrl } from "../../utils/urls";
import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, Abi, provider);
const CampaignCard = ({ campaign }) => {
  const [currCampaign, setCampaign] = useState();
  const { userAddress } = useContext(UserContext);
  const curDate = new Date();
  const handleDonate = async () => {
    try {
      const donationAmount = prompt("Enter donation amount:");
      if (!donationAmount || isNaN(donationAmount)) {
        alert("Invalid donation amount.");
        return;
      }
      const weiAmount = ethers.utils.parseEther(donationAmount);

      const signer = provider.getSigner();

      const tx = await signer.sendTransaction({
        to: campaign.owner,
        value: weiAmount,
      });
      const amountFloat = parseFloat(donationAmount);

      const formattedAmount = amountFloat.toFixed(7);
      await tx.wait();
      axios
        .post(`${soutientBackendUrl}/campaign-donate/`, {
          from_address: userAddress,
          to_address: campaign.owner,
          campaign_address: campaign.owner,
          date_time: curDate,
          amount: formattedAmount,
          name: campaign.title,
        })
        .then(
          (response) => {
            console.log(response);
            if (response.status === 201) {
              // toast.success("Donation completed successfully!!");
              // window.location.reload();
            }
          },
          (error) => {
            console.log(error);
            toast.error("Oops! An error occurred.");
          }
        );

      toast.success("Donation successful!");
    } catch (error) {
      console.error("Error donating to campaign:", error.message);
      toast.error("Error donating to campaign. Please try again.");
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
        <button onClick={handleDonate} className="submit__button">
          Donate
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
