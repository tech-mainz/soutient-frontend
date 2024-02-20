import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateCampaign from './pages/CreateCampaign/CreateCampaign'
import { MainPage } from './pages'
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path="/create-campaign" element={<CreateCampaign />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
