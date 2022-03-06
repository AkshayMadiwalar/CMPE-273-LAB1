import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavDropdown, Container, InputGroup, FormControl, Form, Button, Col } from 'react-bootstrap'
import Signup from '../auth/Signup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import constants from './../../utils/constants.json'

const NavBarLayout = props => {
  const [showModal, setShowModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [cartItems,setCartItems] = useState()

  toast.configure()

  useEffect(async () => {
    const user = await axios.post(constants.uri+"/users/auth")
    if (user.data) {
      //LoggedIN
      setLoggedIn(true)
      const {data} = await axios.post(constants.uri+"/order/cart-items",{userId:user.data.id})
      if(data){
        setCartItems(data.length)
      }
    } else {
      setLoggedIn(false)
    }
  }, [])

  const logout = (e) => {
    e.preventDefault()
    window.localStorage.setItem("userdetails", "")
    setLoggedIn(false)
    window.location.reload(false)
    toast.success("Logged Out")
  }

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>

          <Col sm={1}></Col>
          <Col sm={2}>
            <Navbar.Brand href="#"><Link to="/dashboard" style={{ textDecoration: 'none', color:'white' }}>Etsy</Link></Navbar.Brand>
          </Col>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Col sm={6}>
              <Form className="d-flex" style={{ width: "100%" }}>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="outline-success"> <i class="fa fa-search" aria-hidden="true"></i></Button>
              </Form>
            </Col>

            <Col sm={2}></Col>

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              {loggedIn && (
                <>
                  <Nav.Link><Link to="/profile"><i class="fa fa-heart" aria-hidden="true"></i></Link></Nav.Link>
                  <NavDropdown title={(<i class="fa fa-shopping-bag" aria-hidden="true"></i>)} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><Link to="/shop"><span>Sell on Etsy</span></Link></NavDropdown.Item>
                  </NavDropdown>


                  <NavDropdown title={(<i class="fa fa-user-circle" aria-hidden="true"></i>)} id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link to="/profile"><span>My Profile</span></Link></NavDropdown.Item>
                    <NavDropdown.Item >My Purchases</NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/shop/myShops"><span>My Shops</span></Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#action2"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Nav.Link>
                </>
              )}

            </Nav>
            {!loggedIn && (
              <Button variant="warning" onClick={() => setShowModal(true)}>Login</Button>
            )}

            {loggedIn && (
              <Button variant="warning" onClick={(e) => logout(e)}>Logout</Button>
            )}

          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal && (
        <Signup
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </Fragment>

  )
}

NavBarLayout.propTypes = {}

export default NavBarLayout