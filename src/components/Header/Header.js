import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

import './Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'  // import useselector hook for getting the state.

function Header() {
  const cartNumber = useSelector(state => state.cart)  // create avariable for defining the useslector wit the slice name.
  return (
    <div className='header'>
   
        <div className='logo'>
        <Link to={"/"}>LOGO</Link>
        </div>
       
          <div className="menu" >
            <Link to={'/'}>Products</Link>
           <Link to={'/Cart'}><AiOutlineShoppingCart/> {cartNumber.length}</Link>   {/* cartProducts.length will show the length of the products added to the cart. */}                            
          </div>
        
    </div>
  );
}

export default Header;