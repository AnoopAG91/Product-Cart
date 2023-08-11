import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from 'react-icons/ai'

import './Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'  // import useselector hook for getting the state.

function Header() {
  const cartProducts = useSelector(state => state.cart)  // create avariable for defining the useslector wit the slice name.
  return (
    <div className='header'>
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between navbar bg-dark">
      <Container>
        <Navbar.Brand href={"/"}>Product</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link><Link to={'/'}>Products</Link></Nav.Link>
            <Nav.Link><Link to={'/Cart'}><AiOutlineShoppingCart/> {cartProducts.length}</Link></Nav.Link>    {/* cartProducts.length will show the length of the products added to the cart. */}                            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;