import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';


const Cart = () => {

  const {cartItems,bijoux_list,removeFromCart} = useContext(StoreContext);


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Titre</p>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Total</p>
          <p>Annuler</p>
        </div>
        <br />
        <hr />
        {bijoux_list.map((item,index)=>{
          
          if(cartItems[item._id]<0){
            return(
              <div className='cart-items-title cart-items-item'>
                <p>{item.nom}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
