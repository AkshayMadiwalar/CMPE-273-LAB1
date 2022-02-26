import React, { Fragment, useEffect, useState } from 'react'
import { Card, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import clothing from './../../images/clothing.jpg'
import jewelry from './../../images/jewelry.jpg'
import homedecor from './../../images/homedecor.jpg'
import art from './../../images/art.jpg'
import entertainment from './../../images/entertainment.jpg'
import axios from 'axios'

const Dashboard = () => {
    const [products, setProducts] = useState([])

    useEffect(async () => {
        const { data } = await axios.get('/dashboard/products')
        console.log(data)
        const grid = []
        for (var i = 0; i < data.length; i = i + 4) {
            var ar = []
            if (data[i]) {
                ar.push(data[i])
            }
            if (data[i + 1]) {
                ar.push(data[i + 1])
            }
            if (data[i + 2]) {
                ar.push(data[i + 2])
            }
            if (data[i + 3]) {
                ar.push(data[i + 3])
            }
            grid.push(ar)
        }
        setProducts(grid)
    }, [])

    const addToFavorites = async (product) => {
        console.log(product)
        const token = window.localStorage.getItem("userdetails")
        const {data} = await axios.post("/users/auth",{token})
        const res = await axios.post("/users/add-to-favorites",{id:data.id,productId:product.product_id})
        console.log(res.data)
    }

    return (
        <Fragment >
            <Card >
                <Card.Body style={{ backgroundColor: "#FDEBD2", height: "100%" }}>
                    <Row>
                        <h2 style={{ textAlign: 'center' }}>Welcome back Akshay!</h2>
                        <h3 style={{ textAlign: 'center' }}>Explore one-of-a-kind finds from independent makers</h3>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <Row>
                                <Image roundedCircle width={5} height={120} src={clothing} />
                            </Row>
                            <Row><h6 style={{ textAlign: 'center' }}>Clothing</h6></Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <Image roundedCircle width={5} height={120} src={jewelry} />
                            </Row>
                            <Row><h6 style={{ textAlign: 'center' }}>Jewelry</h6></Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <Image roundedCircle width={5} height={120} src={entertainment} />
                            </Row>
                            <Row><h6 style={{ textAlign: 'center' }}>Entertainment</h6></Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <Image roundedCircle width={5} height={120} src={homedecor} />
                            </Row>
                            <Row><h6 style={{ textAlign: 'center' }}>Home Decor</h6></Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <Image roundedCircle width={5} height={120} src={art} />
                            </Row>
                            <Row><h6 style={{ textAlign: 'center' }}>Art</h6></Row>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Title style={{ marginRight: "10%", marginLeft: "10%", textAlign: 'center' }}>Discover our unique products! Shop NOW.</Card.Title>
                <Card.Body style={{ marginRight: "10%", marginLeft: "10%" }}>
                    {products && products.map(productRow => (
                        <Row>
                            {productRow.map(product => (
                                <Col sm={4}>
                                    <Card>
                                        <Card.Img variant="top" src={product.img} />
                                        <Card.Body>
                                            <Card.Title>
                                                <Row>
                                                    <Col cm={5}>{product.product_name}</Col>
                                                    <Col sm={5}><span style={{ textAlign: 'right' }}>${product.price}</span></Col>
                                                    <Col sm={2}>
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            overlay={<Tooltip id="button-tooltip-2">Add to favorites</Tooltip>}
                                                        >
                                                            <Button
                                                                variant="light"
                                                                className="d-inline-flex align-items-center"
                                                                onClick={()=>addToFavorites(product)}
                                                            >
                                                                <i style={{ color: 'lightgrey' }} className="fa fa-heart"  aria-hidden="true"></i>
                                                            </Button>
                                                        </OverlayTrigger>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                </Row>
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    {product.description.length < 30 ? (<span style={{ fontSize: 14 }}>product.description</span>) : (<span style={{ fontSize: 14 }}>{product.description.slice(0, 30)}...</span>)}
                                                </Row>
                                                <Row>
                                                    <Col>{product.quantity > 0 ? (<span>In Stock ({product.quantity} available)</span>) : (<span style={{ color: 'red' }}>Out of Stock</span>)}</Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Dashboard