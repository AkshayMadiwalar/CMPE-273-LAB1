import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavDropdown, Container, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import Signup from '../auth/Signup'

const NavBarLayout = props => {
  const [showModal, setShowModal] = useState(false)

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
              <Nav.Link href="#action1"><i class="fa fa-heart" aria-hidden="true"></i></Nav.Link>
              <Nav.Link href="#action2"><i class="fa fa-user-circle" aria-hidden="true"></i></Nav.Link>
              <Nav.Link href="#action2"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Nav.Link>
            </Nav>
            <Button variant="warning" onClick={()=>setShowModal(true)}>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal && (
        <Signup
          show={showModal}
          onHide={() => setShowModal(false)}
         />
      )}
    </Fragment>

  )
}

NavBarLayout.propTypes = {}

export default NavBarLayout