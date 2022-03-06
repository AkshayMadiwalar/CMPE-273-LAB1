import React, { Fragment, useEffect, useState } from 'react'
import { Button, Row, Col, Form, Card, Tooltip, OverlayTrigger } from 'react-bootstrap'
import ApplyFilters from './ApplyFilters'
import axios from 'axios'
import { toast } from 'react-toastify'
import constants from './../../utils/constants.json'


const ProductList = () => {

    const [filters, setFilters] = useState({
        category: "",
        price: ""
    })

    const [userId, setUserId] = useState()
    const [favorites, setFavorites] = useState()

    const [products, setProducts] = useState([])


    useEffect(async () => {
        const res = await axios.post(constants.uri+"/users/auth")
        setUserId(res.data.id)
        const fav = await axios.post(constants.uri+'/users/myFavorites', { id: res.data.id })
        console.log(fav.data)

        var favItems = []
        fav.data.map(item => {
            favItems.push(item.product_id)
        })
        setFavorites(favItems)

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
    }, [])

    const [showApplyFilter, setShowApplyFilter] = useState(false)

    const sortBy = async (e) => {
        e.preventDefault()
        const sort = e.target.value

        const reqbody = {
            category: filters.category,
            price: filters.price,
        }

        var url = ""
        var order = ""

        if (sort === 'plh') {
            url = 'sort-by-price'
            order = 'asc'
        } else if (sort === 'phl') {
            url = 'sort-by-price'
            order = 'desc'
        } else if (sort === 'qlh') {
            url = 'sort-by-quantity'
            order = 'asc'
        } else if (sort === 'qhl') {
            url = 'sort-by-quantity'
            order = 'desc'
        } else if (sort == 'slh') {
            url = 'sort-by-sales'
            order = 'asc'
        } else if (sort === 'shl') {
            url = 'sort-by-sales'
            order = 'desc'
        }
        else { }

        reqbody.order = order

        const { data } = await axios.post(constants.uri+`/products/${url}`, reqbody)
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
    }

    const addToFavorites = async (product) => {
        if (favorites.indexOf(product.product_id) > -1) {
            //Remove from favorites
            var fav = [...favorites]
            const index = fav.indexOf(product.product_id)
            if (index != -1) {
                try {
                    const res = await axios.post(constants.uri+"/users/remove-from-favorites", { id: userId, productId: product.product_id })
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
                const res = await axios.post(constants.uri+"/users/add-to-favorites", { id: userId, productId: product.product_id })
                setFavorites([...favorites, product.product_id])
                toast("Added to your favorites collection!", { position: 'top-center' })
            } catch (error) {
                console.log(error)
                toast("Failed to add to favorites")
            }
        }
    }

    const excludeOutOfStock = (e) => {
        if (e.target.checked) {
            const data = []
            products.map((productRow) => {
                productRow = productRow.filter(product => parseInt(product.quantity) != 0)
                data.push(productRow)
            })
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
            console.log(grid)
            setProducts(grid)
        }
    }

    return (
        <Fragment>
            <Row style={{ margin: 30 }}>
                <Col sm={2}>
                    <Button style={{ width: "100%" }} className='rounded-pill' onClick={() => setShowApplyFilter(true)} variant='outline-secondary'>All filters</Button>
                </Col>
                <Col sm={5}></Col>
                <Col sm={3}>
                    <Form.Group className="mb-3" id="formGridCheckbox" >
                        <Form.Check type="checkbox" label="Exclude Out of Stock Items" onClick={(e) => excludeOutOfStock(e)} />
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Select aria-label="Default select example" className='rounded-pill' onChange={(e) => sortBy(e)}>
                        <option >Sort By</option>
                        <option value="plh">Price - Low to High</option>
                        <option value="phl">Price - High to Low</option>
                        <option value="qlh">Quantity - Low to High</option>
                        <option value="qhl">Quantity - High to Low</option>
                        <option value="slh">Sales - High to Low</option>
                        <option value="shl">Sales - Low to High</option>
                    </Form.Select>
                </Col>
            </Row>


            <Row>
                {products && (
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
                                                            {product.description.length < 30 ? (<span style={{ fontSize: 14 }}>{product.description}</span>) : (<span style={{ fontSize: 14 }}>{product.description.slice(0, 30)}...</span>)}
                                                        </Row>
                                                        <Row>
                                                            <Col>{product.quantity > 0 ? (<span>In Stock ({product.quantity})</span>) : (<span style={{ color: 'red' }}>Out of Stock</span>)}</Col>
                                                            <Col><span style={{ fontWeight: 'lighter' }}>{product.sales} Sales</span></Col>
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
                )}

            </Row>
            {showApplyFilter && (
                <ApplyFilters
                    showApplyFilter={showApplyFilter}
                    setShowApplyFilter={setShowApplyFilter}
                    filters={filters}
                    setFilters={setFilters}
                    products={products}
                    setProducts={setProducts}
                />
            )}
        </Fragment>
    )
}

export default ProductList