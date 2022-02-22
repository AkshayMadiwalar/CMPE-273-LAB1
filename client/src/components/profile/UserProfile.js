import React, { Fragment } from 'react'
import { Card, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap'
import defaultProfileImg from './../../images/defaultProfileImg.png'

const UserProfile = props => {

    const arr = [1, 2, 3, 4, 5, 6, 7]


    const arrGrid = []
    for (var i = 0; i < arr.length; i = i + 4) {
        var ar = []
        if (arr[i]) {
            ar.push(arr[i])
        }
        if (arr[i + 1]) {
            ar.push(arr[i + 1])
        }
        if (arr[i + 2]) {
            ar.push(arr[i + 2])
        }
        if (arr[i + 3]) {
            ar.push(arr[i + 3])
        }
        arrGrid.push(ar)
    }

    return (
        <Fragment>
            <Card style={{ margin: 20 }}>
                <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <Image rounded width={175} height={150} src={defaultProfileImg} />
                        </Col>
                        <Col>
                            <Row>
                                <h4>Akshay Madiwalar</h4>
                            </Row>
                            <Row>
                                0 Followers | 0 Following
                            </Row>

                        </Col>
                        <Col>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card style={{ margin: 20 }}>
                <Card.Header>
                    <Row>
                        <Col>
                            Favorite Items
                        </Col>
                        <Col>
                            <Form className="d-flex" >
                                <FormControl
                                    type="search"
                                    placeholder="Search your favorites"
                                    className="me-1"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success"> <i class="fa fa-search" aria-hidden="true"></i></Button>
                            </Form>
                        </Col>
                    </Row>
                </Card.Header>


                {arrGrid && arrGrid.map(arr => (
                    <Row>
                        {arr && arr.map(item => (
                            <Col>
                                <Card.Body>
                                    <Card.Text>
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Img variant="top" src={defaultProfileImg} />
                                            <Card.Body>
                                                <Card.Title>Item Name</Card.Title>
                                                <Card.Text>
                                                    Price, In Stock
                                                </Card.Text>
                                                {/* <Button variant="primary">Go somewhere</Button> */}
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        ))}
                    </Row>

                ))}


            </Card>
        </Fragment>
    )
}


export default UserProfile