import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage,CampaignsFeed ,CreateCampaign} from "./pages";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/campaign/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign/all" element={<CampaignsFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
