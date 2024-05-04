import React from 'react'
import './Mainlayout.css'
import { Backbutton } from '../../components'
const Mainlayout = (props) => {
  return (
    <div className='mainlayout__container'>
        <div className="backbutton__contain">
            <Backbutton/>
        </div>
      {props.children}
    </div>
  )
}

export default Mainlayout
