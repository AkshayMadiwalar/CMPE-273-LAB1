import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import constants from './../../utils/constants.json'
import { Card, Button, Row,Col,Image } from 'react-bootstrap'

const MyOrders = () => {
    const [orders, setorders] = useState([])

    useEffect(async () => {
        const { data } = await axios.post(constants.uri + "/users/auth")
        const res = await axios.post(constants.uri + '/users/myorders', { id: data.id })
        setorders(res.data)
    }, [])

    return (
        <Fragment>
            <Card style={{marginTop:20,marginLeft:"15%",marginRight:"15%"}}>
                <Card.Header>My Orders</Card.Header>
                <Card.Body>
                    {orders && orders.length > 0 ? 
                            orders.map(order => (
                                <>
                                    <Card.Title><span style={{fontWeight:'lighter'}}>Order Id:</span> <span style={{fontWeight:'light'}}>{order.order_id}</span></Card.Title>
                                    <Card.Text>
                                        <Row>
                                            <Col sm={3}>
                                                <Image src={order.product_img}></Image>    
                                            </Col>
                                            <Col sm={1}></Col>
                                            <Col sm={5}>
                                                <br/>
                                                <Row><Col sm={3}><h5>{order.product_name}</h5></Col> </Row>
                                                <Row><Col sm={3}><span>Quantity</span></Col> <Col sm={3}><span>{order.quantity}</span></Col></Row>
                                                <Row><Col sm={3}><span>Price</span></Col><Col sm={3}><span>${order.price}</span></Col></Row>
                                                <br/>
                                                <Row><Col sm={3}><span>Total Paid</span></Col><Col sm={3}><span>${order.price*order.quantity}</span></Col></Row>
                                            </Col>
                                            <Col sm={2}>
                                                <br/>
                                                <Row><span>Seller: {order.shop_name}</span></Row>
                                                
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    <hr/>
                                </>
                            ))
                      : (
                        <span>No Orders yet!</span>
                    )}

                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default MyOrders