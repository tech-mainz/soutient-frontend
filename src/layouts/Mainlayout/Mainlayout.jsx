import React from 'react'
import './Mainlayout.css'
import { Backbutton } from '../../components'
import Footer from '../../components/Footer/Footer'
const Mainlayout = (props) => {
  return (
    <div className='mainlayout__container'>
        <div className="backbutton__contain">
            <Backbutton/>
        </div>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Mainlayout
