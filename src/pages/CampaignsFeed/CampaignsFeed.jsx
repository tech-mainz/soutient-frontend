import React from "react";
import "./CampaignsFeed.css";
const CampaignsFeed = () => {
  return (
    <div className="campaign__feed_pg">
      <h1>List Campaigns</h1>
      <div className="campaigns__list_contain">
        <div className="campaign__list_card">
          <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
          <div className="campaign__feed_card_body">
            <div className="feed_card_body_text">
              <p>Target: 100 ETH</p>
              <p>Current: 12 ETH</p>
            </div> 
            <button>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsFeed;
