import React, { Fragment } from 'react'
import { Card, Button, Row, Col, Image, Form } from 'react-bootstrap'
import defaultProfileImg from './../../images/defaultProfileImg.png'
import countries from './../utils/countries.json'

const EditProfile = () => {
    return (
        <Fragment>
            <h4 style={{ marginLeft: "20%", marginRight: "20%", marginTop: 20 }}>Your Public Profile</h4>
            <Card style={{ marginLeft: "20%", marginRight: "20%", marginTop: 20 }}>

                <Card.Header>Update your Profile</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Row style={{ margin: 20 }}>
                            <Col sm={3}>
                                <Image rounded width={175} height={150} src={defaultProfileImg} />
                            </Col>
                            <Col sm={3}></Col>
                            <Col>
                                <span>Profile Picture</span><br />
                                <span>Choose new profile picture</span>
                            </Col>
                        </Row>
                        <Row style={{ margin: 20 }}><span style={{ fontWeight: "lighter", fontSize: 14 }}>Must be .jpg or .png file, smaller than 20MB</span></Row>

                        <hr />

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}>
                                Your Name: Akshay Madiwalar
                            </Col>
                            <Col> <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Change Name</span></Col>
                        </Row>

                        <hr />

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}><span>Gender:</span></Col>
                            <Col sm={6}>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Check
                                                type='radio'
                                                label="Male"
                                                id="male"
                                            /></Col>
                                        <Col>
                                            <Form.Check
                                                type='radio'
                                                label="Female"
                                                id="female"
                                            />
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>

                        <hr />

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}>City</Col>
                            <Col>
                                <Form className="d-flex" >
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <hr />

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}>BirthDay</Col>
                            <Col>
                                <Form className="d-flex" >
                                    <Form.Group className="mb-3" controlId="formBasicDate">
                                        <Form.Control type="date" placeholder="" />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <hr />

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}>Full Address</Col>
                            <Col>
                                <Row>
                                    <Form className="d-flex" >
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Street Address" />
                                        </Form.Group>
                                    </Form>
                                </Row>
                                <Row>
                                    <Form className="d-flex" >
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="City" />
                                        </Form.Group>
                                    </Form>
                                </Row>
                                <Row>
                                    <Form className="d-flex" >
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Zip Code" />
                                        </Form.Group>
                                    </Form>
                                </Row>
                            </Col>
                        </Row>

                        <hr />

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}>Country</Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Choose your country</option>
                                    {countries && countries.map(country=>(
                                        <option value={country}>{country}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row style={{ margin: 20 }}>
                            <Col sm={6}>
                                <Row>About</Row>
                                <Row style={{ fontWeight: "lighter", fontSize: 14 }}>Tell people a little about yourself</Row>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Button style={{ width: "100%" }} className="rounded-pill" variant="warning">Save Changes</Button>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default EditProfile