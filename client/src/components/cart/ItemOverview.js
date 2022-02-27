import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Carousel, Row, Col, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemOverview = () => {

    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(async () => {
        const id = params.id
        const { data } = await axios.get(`/users/product/${id}`)
        setProduct(data)
    }, [])

    return (
        <Fragment>
            {product && (
                <Row style={{ marginLeft: "15%", marginRight: "15%", marginTop: 20 }}>
                    <Col sm={7}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={product.img}
                                    alt="First slide"
                                    width={200}
                                    height={450}
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                        <h4>{product.product_name}</h4>
                        <h5>${product.price}</h5>
                        <br />
                        {product.quantity > 0 ? (<span style={{color:'green',fontWeight:'bold'}}> In Stock ({product.quantity} available)</span>) : <span style={{color:'red',fontWeight:'bold'}}>Out of Stock</span>}
                        <br/><br/>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Items</Form.Label>
                            <Form.Control placeholder="Enter Quantity" />
                        </Form.Group>
                        <Button variant='outline-warning' className='rounded-pill' style={{width:"100%"}}>Buy it now</Button>
                        <br/>
                        <br/>
                        <Button variant='warning' className='rounded-pill' style={{width:"100%"}}>Add to cart</Button>
                    </Col>
                </Row>
            )}

        </Fragment>
    )
}

export default ItemOverview