import React, { Fragment, useEffect, useState } from 'react'
import { Button, Row, Col, Image, Card, FormControl } from 'react-bootstrap'
import defaultShop from './../../images/defaultShop.png'
import shopOwner from './../../images/shopowner.png'
import { useParams } from 'react-router-dom'
import EditShop from './EditShop'
import axios from 'axios'
import AddItem from './AddItem'

const Shop = () => {

    const [shopName, setShopName] = useState("")
    const [editShop, setEditShop] = useState(false)
    const [addItem,setAddItem] = useState(false)

    const [shop, setShop] = useState({})
    const params = useParams()

    useEffect(async () => {
        setShopName(params.name)
        const n = params.name
        const res = await axios.post("/shop/byname", { name: n })
        setShop(res.data)
    }, [])

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
            {shop && (
                <>
                    <Card style={{ margin: 20 }}>
                        <Card.Body>
                            <Row>
                                <Col sm={2}>
                                    <Image rounded width={150} height={120} src={defaultShop} />
                                </Col>
                                <Col sm={3}>
                                    <Row><h4>{shopName}</h4></Row>
                                    <Row><span style={{ fontWeight: 'lighter', fontSize: 14 }}>0 Sales | Joined in 2022</span><br /></Row>

                                    <Row><Button style={{ width: 'auto' }} className='rounded-pill' variant='outline-warning' onClick={() => setEditShop(true)}>Edit Shop</Button></Row>
                                </Col>
                                <Col sm={5}></Col>
                                <Col sm={2}>
                                    <Row><h6 >Shop Owner</h6></Row>
                                    <Image rounded width={50} height={55} src={shopOwner} />
                                    <Row><span style={{ fontWeight: 'lighter' }}>{shop.owner_name}</span></Row>
                                    <Row><span style={{ fontWeight: 'lighter' }}>{shop.email}</span></Row>
                                    <Row><span style={{ fontWeight: 'lighter' }}>{shop.ph_number}</span></Row>
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
                                    <br/>
                                    <br />
                                    <Button style={{ width: "100%", textAlign: "left" }} variant="warning" onClick={(e)=>setAddItem(true)}>Add new Item</Button>
              
                                    <br/>
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

                    <EditShop
                        editShop={editShop}
                        setEditShop={setEditShop}
                        shopName={shopName}
                        shop={shop}
                    />

                    <AddItem 
                        addItem={addItem}
                        setAddItem={setAddItem}
                        sellerId={shop.seller_id}
                        shop={shop}
                    />
                </>
            )}

        </Fragment>
    )
}

export default Shop