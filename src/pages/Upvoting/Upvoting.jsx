import React, { useEffect } from "react";
import "./Upvoting.css";
import UpvotingCard from "./UpvotingCard";
import { useQuery } from "react-query";
import { soutientBackendUrl } from "../../utils/urls";
import axios from "axios";

const Upvoting = () => {
  const {
    data: campaigns,
    isLoading,
    error,
  } = useQuery("campaigns", retrieveCampaigns);
  async function retrieveCampaigns() {
    const response = await axios.get(`${soutientBackendUrl}/election/`);
    return response.data;
  }
  useEffect(() => {
    retrieveCampaigns();
  }, []);
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <>
      <div className="upvoting_main__container">
        <div className="upvoting__card_container">
          {campaigns &&
            campaigns.map((campaign) => (
              <UpvotingCard key={campaign.id} campaign={campaign} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Upvoting;
