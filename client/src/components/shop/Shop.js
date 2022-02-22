import React, { Fragment } from 'react'
import { Button, Row, Col, Image, Card } from 'react-bootstrap'
import defaultShop from './../../images/defaultShop.png'
import shopOwner from './../../images/shopowner.png'

const Shop = () => {
    return (
        <Fragment>
            <Card style={{margin:20}}>
                <Card.Body>
                    <Row>
                        <Col sm={2}>
                            <Image rounded width={150} height={120} src={defaultShop}/>
                        </Col>
                        <Col sm={3}>
                            <Row><h4>Shop Name</h4></Row>
                            <Row><span style={{fontWeight:'lighter',fontSize:14}}>0 Sales | Joined in 2022</span><br/></Row>

                            <Row><Button style={{width:'auto'}} className='rounded-pill' variant='outline-warning'>Edit Shop</Button></Row>
                        </Col>
                        <Col sm={5}></Col>
                        <Col sm={2}>
                            <Row><h6 >Shop Owner</h6></Row>
                            <Image rounded width={50} height={55} src={shopOwner}/>
                            <Row><span style={{fontWeight:'lighter'}}>Owner Name</span></Row>
                            <Row><span style={{fontWeight:'lighter'}}>owner@gmail.com</span></Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Shop