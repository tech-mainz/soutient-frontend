import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateCampaign from './pages/CreateCampaign/CreateCampaign'
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' />
      <Route path="/create-campaign" element={<CreateCampaign />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
