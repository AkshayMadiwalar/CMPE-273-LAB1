import React, { Fragment, useEffect, useState } from 'react'
import { Card, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import clothing from './../../images/clothing.jpg'
import jewelry from './../../images/jewelry.jpg'
import homedecor from './../../images/homedecor.jpg'
import art from './../../images/art.jpg'
import entertainment from './../../images/entertainment.jpg'
import axios from 'axios'
import { toast } from 'react-toastify'
import constants from './../../utils/constants.json'

const Dashboard = () => {
    const [products, setProducts] = useState([])

    const [favorites, setFavorites] = useState([])

    const [user, setUser] = useState()

    useEffect(async () => {

        //Set user id from access token stored in localstorage
        const token = window.localStorage.getItem("userdetails")
        const res = await axios.post(constants.uri+"/users/auth", { token })
        setUser(res.data.id)

        //Get all products
        const { data } = await axios.get(constants.uri+'/dashboard/products')
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


        const fav = await axios.post(constants.uri+'/users/myFavorites', { id: res.data.id })
        console.log(fav.data)

        var favItems = []
        fav.data.map(item => {
            favItems.push(item.product_id)
        })
        setFavorites(favItems)
    }, [])

    const addToFavorites = async (product) => {
        if (favorites.indexOf(product.product_id) > -1) {
            //Remove from favorites
            var fav = [...favorites]
            const index = fav.indexOf(product.product_id)
            if (index != -1) {
                try {
                    const res = await axios.post(constants.uri+"/users/remove-from-favorites", { id: user.id, productId: product.product_id })
                    if (res.data) {
                        fav.splice(index, 1)
                        setFavorites(fav)
                        toast("Removed from your favorites collection!", { position: 'top-center' })
                    }
                } catch (error) {
                    toast("Failed to remove from Favorites", { position: 'top-center' })
                }
            }
        } else {
            //Add to favorites
            try {
                const res = await axios.post(constants.uri+"/users/add-to-favorites", { id: user.id, productId: product.product_id })
                setFavorites([...favorites, product.product_id])
                toast("Added to your favorites collection!", { position: 'top-center' })
            } catch (error) {
                console.log(error)
                toast("Failed to add to favorites")
            }
        }
    }

    return (
        <Fragment >
            <Card >
                <Card.Body style={{ backgroundColor: "#FDEBD2", height: "100%" }}>
                    <Row>
                        {user && (
                            <h2 style={{ textAlign: 'center' }}>Welcome back Akshay!</h2>
                        )}

                        <h3 style={{ textAlign: 'center' }}>Explore  122</h3>
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
                                                        {favorites.includes(product.product_id) ? (
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                overlay={<Tooltip id="button-tooltip-2">Remove From favorites</Tooltip>}
                                                            >
                                                                <Button
                                                                    variant="light"
                                                                    className="d-inline-flex align-items-center"
                                                                    onClick={() => addToFavorites(product)}
                                                                >
                                                                    <i style={{ color: 'red' }} className="fa fa-heart" aria-hidden="true"></i>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        ) :
                                                            (
                                                                <OverlayTrigger
                                                                    placement="bottom"
                                                                    overlay={<Tooltip id="button-tooltip-2">Add to favorites</Tooltip>}
                                                                >
                                                                    <Button
                                                                        variant="light"
                                                                        className="d-inline-flex align-items-center"
                                                                        onClick={() => addToFavorites(product)}
                                                                    >
                                                                        <i style={{ color: 'lightgrey' }} className="fa fa-heart" aria-hidden="true"></i>
                                                                    </Button>
                                                                </OverlayTrigger>
                                                            )
                                                        }

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