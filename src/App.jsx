import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MainPage,
  CampaignsFeed,
  CreateCampaign,
  Upvoting,
  LoanApplication,
  LoanFeeds,
  Review,
} from "./pages";
import UserDetails from "./contexts/UserContext";
import ConnectWalletButton from "./components/ConnectWalletButton/ConnectWalletButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mainlayout from "./layouts/Mainlayout/Mainlayout";
const App = () => {
  return (
    <div className="App">
      <UserDetails>
        <BrowserRouter>
          <Mainlayout>
            <ConnectWalletButton />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/campaign/create-campaign"
                element={<CreateCampaign />}
              />
              <Route path="/campaign/all" element={<CampaignsFeed />} />
              <Route path="/upvote" element={<Upvoting />} />
              <Route path="/apply/student-loan" element={<LoanApplication />} />
              <Route path="/feed/student-loan" element={<LoanFeeds />} />
              <Route path="/review" element={<Review />} />
            </Routes>
          </Mainlayout>
        </BrowserRouter>
        <ToastContainer />
      </UserDetails>
    </div>
  );
};

export default App;
