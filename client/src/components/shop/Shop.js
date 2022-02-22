import React, { Fragment } from 'react'
import { Button, Row, Col, Image, Card, FormControl } from 'react-bootstrap'
import defaultShop from './../../images/defaultShop.png'
import shopOwner from './../../images/shopowner.png'

const Shop = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7]

    var arrGrid = []

    for (var i = 0; i < arr.length; i = i + 3) {
        var ar = []
        if (arr[i]) {
            ar.push(arr[i])
        }
        if (arr[i + 1]) {
            ar.push(arr[i + 1])
        }
        if (arr[i + 2]) {
            ar.push(arr[i])
        }
        arrGrid.push(ar)
    }

    return (
        <Fragment>
            <Card style={{ margin: 20 }}>
                <Card.Body>
                    <Row>
                        <Col sm={2}>
                            <Image rounded width={150} height={120} src={defaultShop} />
                        </Col>
                        <Col sm={3}>
                            <Row><h4>Shop Name</h4></Row>
                            <Row><span style={{ fontWeight: 'lighter', fontSize: 14 }}>0 Sales | Joined in 2022</span><br /></Row>

                            <Row><Button style={{ width: 'auto' }} className='rounded-pill' variant='outline-warning'>Edit Shop</Button></Row>
                        </Col>
                        <Col sm={5}></Col>
                        <Col sm={2}>
                            <Row><h6 >Shop Owner</h6></Row>
                            <Image rounded width={50} height={55} src={shopOwner} />
                            <Row><span style={{ fontWeight: 'lighter' }}>Owner Name</span></Row>
                            <Row><span style={{ fontWeight: 'lighter' }}>owner@gmail.com</span></Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card style={{ margin: 20 }}>
                <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <h5>Items</h5>
                            <FormControl
                                type="search"
                                placeholder="Search items"
                                className="me-1"
                                aria-label="Search"
                            />
                            <br />
                            <Button style={{ width: "100%", textAlign: "left" }} variant="outline-secondary">All</Button>
                            <br />
                            <hr />
                            <span style={{ fontWeight: 'lighter' }}>0 Sales (Total)</span>
                        </Col>
                        <Col sm={9}>
                            {arrGrid && arrGrid.map(arr => (
                                <Row>
                                    {arr && arr.map(item => (
                                        <Col sm={3}>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Card style={{ width: '10rem' }}>
                                                        <Card.Img variant="top" width={70} height={75} src={defaultShop} />
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
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Shop