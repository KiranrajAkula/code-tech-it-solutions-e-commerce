import React from 'react'
import "../App.css"

const Header = (props) => {
  return (
    <div className='flex shopping-card'>
        <div onClick={()=>{props.handleShow(false)}} >
        Shopping Cart App
        </div>
        <div className='card_button' onClick={()=>{props.handleShow(true)}}>Cart
            <sup className='card_count'>{props.count}</sup>
        </div>
    </div>
  )
}

export default Header