import React, { useEffect, useState } from 'react'
import "../App.css"

const CartList = ({ cart }) => {
    const [CART, setCART] = useState([])

    useEffect(() => {
      setCART(cart)
    }, [cart])
    
  return (
    <div className='cards_section'>
        {
            CART?.map((eachItem , itemIndex) => {
                return (
                    <div className='cards'>
                        <img src={eachItem.images} width={"150px"} height={"100px"} alt=''/>
                        <span> { eachItem.title } </span>
                        <button className='btn' onClick={
                            () => {
                                const _CART = CART.map((item, index)=>{
                                    return itemIndex === index ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                })
                                setCART(_CART)
                            }}> - </button>
                        <span>{ eachItem.quantity }</span>
                        <button className='btn' onClick={
                            () => {
                                const _CART = CART.map((item, index)=>{
                                    return itemIndex === index ? {...item, quantity: item.quantity + 1 } : item
                                })
                                setCART(_CART)
                            }}> + </button>
                       <span> { eachItem.price * eachItem.quantity   } </span>

                    
                    </div>
                )
            })
        }
                    <p className='total'> total : <span> Rs. </span>
                        {
                            CART.map((item) =>  item.price * item.quantity ).reduce((total, value) => total + value,0)
                        }
                    </p>
    </div>
  )
}

export default CartList