import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, CampaignsFeed, CreateCampaign, Upvoting } from "./pages";
import UserDetails from "./contexts/UserContext";
import ConnectWalletButton from "./components/ConnectWalletButton/ConnectWalletButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
      </UserDetails>
    </div>
  );
};

export default App;
