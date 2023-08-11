import React from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './Cart.css'
import { useDispatch } from 'react-redux'     // importing usedispatch to dispatch the action.
import { remove } from '../Store/CartSlice'   // importing remove action from cartSlice.

function Cart() {
 
  const dispatch = useDispatch()     // creating a variable to use usedispatch hook.
  const productCart = useSelector(state => state.cart)   // creating a variable to use useselector hook to get the state of cart.

  function removeCart(id){   // remove cart function takes id of the product as parameter to remove the item.
    dispatch(remove(id))       // using dispatch hook to do the remove action.
  }
  return (
    <div>
         <Header/>
         <div className='wrapper'>
         <h1>Cart Items</h1>

         <div className='productCart-container'>
         {
          productCart.map((product) => (

            <>
             
              <div className='products-card' key={product.id}>

                <div className='product-image'>
                  <img src={product.image} alt='product'></img>
                </div>

                <div className='product-content'>
                  <h3>{product.title}</h3>
                  <h6>{product.price}</h6>
                </div>

                <div className='product-btn'>
                  <button onClick={()=> removeCart(product.id)} style={{backgroundColor:'red'}}>Remove Item</button>  
                  {/* onclick event removecart function takes the id of the product to remove the item by its unique id. */}
                </div>
                
              </div>
             
            </>
          ))

        }
        </div>
       
    </div>

    </div>
  )
}

export default Cart