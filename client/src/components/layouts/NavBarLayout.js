import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavDropdown, Container, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import Signup from '../auth/Signup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const NavBarLayout = props => {
  const [showModal, setShowModal] = useState(false)

  const [loggedIn, setLoggedIn] = useState(false)

  toast.configure()

  useEffect(async () => {
    const user = await axios.post("/users/auth")
    if (user.data) {
      //LoggedIN
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  const logout = (e) => {
    e.preventDefault()
    window.localStorage.setItem("userdetails","")
    setLoggedIn(false)
    window.location.reload(false)
    toast.success("Logged Out")
  }

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex" style={{ width: "50%" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="outline-success"> <i class="fa fa-search" aria-hidden="true"></i></Button>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              {loggedIn && (
                <>
                  <Nav.Link href="#action1"><i class="fa fa-heart" aria-hidden="true"></i></Nav.Link>

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
                </>
              )}

              <Nav.Link href="#action2"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Nav.Link>
            </Nav>
            {!loggedIn && (
              <Button variant="warning" onClick={() => setShowModal(true)}>Login</Button>
            )}

            {loggedIn && (
              <Button variant="warning" onClick={(e)=>logout(e)}>Logout</Button>
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