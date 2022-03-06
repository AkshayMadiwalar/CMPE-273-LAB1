import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Card, Row, Col, Image, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import constants from './../../utils/constants.json'

const Cart = () => {

    const [cartItems, setCartItems] = useState([])
    const [userId,setUserId] = useState()


    useEffect(async () => {
        const { data } = await axios.post(constants.uri+'/users/auth')
        const userId = data.id
        setUserId(data.id)
        const res = await axios.post(constants.uri+'/order/cart-items', { userId })
        setCartItems(res.data)
    }, [])

    const placeOrder = async (e) => {
        e.preventDefault()
        cartItems.map(async item=>{
            const res = await axios.post(constants.uri+'/order/place-order',{
                productId: item.product_id,
                userId,
                price: item.price,
                quantity: item.quantity
            })
            console.log(res)
        })
    }

    const removeFromCart = async (item) => {
        console.log(item)
        const res = await axios.post(constants.uri+'/order/cart/remove-item',{userId,productId:item.product_id})
        if(res.data){
            setCartItems(cartItems.filter(ele=> ele.id != item.id))
            toast('Item removed from cart')
            
        }
    }

    return (
        <Fragment>
            <Row style={{ marginLeft: '10%', marginRight: '10%', marginTop:25 }}>
                <Col sm={8}>
                    <Card>
                        <Card.Body>
                            <Row><h4 style={{textAlign:'center'}}>Cart Items</h4></Row>
                            <hr/>
                            {cartItems && cartItems.map(item => (
                                <Row>
                                    <Col onSubmit={3}>
                                        <Image src={item.img} />
                                    </Col>
                                    <Col sm={5}>
                                        <Row><h4>{item.product_name}</h4></Row>
                                        <Row>
                                            <Col><span>Price per Unit:</span></Col>
                                            <Col> <span>${item.price}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col><span>Quantity:</span></Col>
                                            <Col> <span>{item.quantity}</span></Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col><span style={{fontWeight:'bold'}}>Total:</span></Col>
                                            <Col> <span style={{fontWeight:'bold'}}>{(item.quantity * item.price).toFixed(2)}</span></Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Button variant='outline-danger' onClick={()=>removeFromCart(item)} className='rounded-pill'>Remove from Cart</Button>
                                        </Row>
                                    </Col>
                                    <Col sm={1}>
                                       
                                    </Col>
                                    <hr/>
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Row><h4 style={{textAlign:'center'}}>Total</h4></Row>
                            <hr/>
                            <Row>
                                <Col><h6>Sub Total:</h6></Col>
                                <Col><span style={{fontWeight:'lighter'}}>$102.82</span></Col>
                            </Row>
                            <Row>
                                <Col><h6>Delivery:</h6></Col>
                                <Col><span style={{fontWeight:'lighter'}}>$0.00</span></Col>
                            </Row>
                            <br />
                            <Row>
                                <Col><h6>Total:</h6></Col>
                                <Col><span style={{fontWeight:'lighter'}}>$102.82</span></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Button variant='success' onClick={(e)=>{placeOrder(e)}} className='rounded-pill'>Place Order</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Cart