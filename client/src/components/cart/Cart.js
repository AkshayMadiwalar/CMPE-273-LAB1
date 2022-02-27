import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

const Cart = () => {
    return (
        <Fragment>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col sm={8}>
                    <Card>
                        <Card.Body>
                            <Row>Cart Items</Row>
                            <Row>
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Cart