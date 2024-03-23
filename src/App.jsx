import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, CampaignsFeed, CreateCampaign, Upvoting } from "./pages";
import UserDetails from "./contexts/UserContext";
import ConnectWalletButton from "./components/ConnectWalletButton/ConnectWalletButton";
const App = () => {
  return (
    <div className="App">
      <UserDetails>
        <ConnectWalletButton/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/campaign/create-campaign"
              element={<CreateCampaign />}
            />
            <Route path="/campaign/all" element={<CampaignsFeed />} />
            <Route path="/upvote" element={<Upvoting />} />
          </Routes>
        </BrowserRouter>
      </UserDetails>
    </div>
  );
};

export default App;
