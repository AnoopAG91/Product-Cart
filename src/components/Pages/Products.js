import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './products.css'
import Header from '../Header/Header'
import { useDispatch } from 'react-redux'   // usedispatch hook is used to dipatch the actions.
import { add } from '../Store/CartSlice'    // add is an action which comes from the cartslice actions.

function Products(e) {
  const dispatch = useDispatch()   // creating a usedispatch hook with dispatch variable.

  const [products, setProducts] = useState([])  // This state is for adding the products which come from the api using axious fetch method.

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
  }, [])
  console.log(products)

  function addToCart(product){  // creating a function for dispatching the cation when click on the button.
    dispatch(add(product))     // here adding the product to the cart slice with add action using dispatch hook.
  }

  return (<>
    <Header/>
    <div className='products-container'>

      <h1>Product List</h1>
      <div className='product-cardDiv'>
        {
          products.map((product, id) => (

            <>

              <div className='products-card' key={id}>

                <div className='product-image'>
                  <img src={product.image} alt='product'></img>
                </div>

                <div className='product-content'>
                  <h4>{product.title}</h4>
                  <h6>{product.price}</h6>
                </div>

                <div className='product-btn'>
                  <button onClick={() => addToCart(product)}>Add To Cart</button>
                </div>

              </div>
            </>
          ))

        }
      </div>
    </div>
  </>
  )
}

export default Products