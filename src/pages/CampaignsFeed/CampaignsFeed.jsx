import React, { useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractId as contractAddress } from "../../utils/urls";
import { Abi } from "../../utils/Abi";
import { UserContext } from "../../contexts/UserContext";
import "./CampaignsFeed.css";
import CampaignCard from "./CampaignCard";

export default function CampaignsFeed() {
  const { isAuthenticated, userAddress } = useContext(UserContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, Abi, provider);

    const getCampaigns = async () => {
      try {
        const campaigns = await contract.getCampaigns();
        // console.log("Campaigns:", campaigns);
        setCampaigns(campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    if (isAuthenticated) {
      getCampaigns();
    }
  }, [isAuthenticated]);
console.log("Campaigns: ",campaigns)
  return (
    <div className="campaign__feed_pg">
      <h1>List Campaigns</h1>
      <div className="campaigns__list_contain">
        {campaigns.map((campaign, index) => (
          <CampaignCard campaign={campaign} key={index} />
        ))}
      </div>
    </div>
  );
}
