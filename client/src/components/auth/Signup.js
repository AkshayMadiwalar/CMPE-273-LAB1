import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'

const Signup = props => {
    const [signin, setSignin] = useState(true)
    const [register, setRegister] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        setRegister(true)
        setSignin(false)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row>
                        <Col sm={8}>
                            Sign in
                        </Col>
                        <Col sm={4}>
                            <Button variant="outline-warning" onClick={(e=>{handleRegister(e)})} className='float-right rounded-pill '>Register</Button>
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {signin && !register && (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Keep me Signed In" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <span>Forgort Password?</span>
                            </Col>
                        </Row>

                        <Button style={{ width: "100%" }} variant="warning" className="rounded-pill" type="submit">
                            Sign in
                        </Button>
                    </Form>
                )}

                {!signin && register && (
                               <Form>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                               </Form.Group>

                               <Form.Group className="mb-3" controlId="formBasicName">
                                   <Form.Label>First Name</Form.Label>
                                   <Form.Control type="text" placeholder="First Name" />
                               </Form.Group>
           
           
                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="password" placeholder="Password" />
                               </Form.Group>
           
                               <Button style={{ width: "100%" }} variant="warning" className="rounded-pill" type="submit">
                                   Register
                               </Button>
                           </Form>
                )}

            </Modal.Body>
        </Modal>
    )
}

Signup.propTypes = {}

export default Signup