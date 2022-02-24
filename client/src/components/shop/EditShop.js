import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Modal, Button, Card, Row, Col, Form } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditShop = ({ editShop, setEditShop, shopName, shop }) => {

    const [updated, setUpdated] = useState(false)

    const [updateFormData, setUpdateFormData] = useState({})

    useEffect(()=>{
        setUpdateFormData(shop)
    },[shop])

    console.log(shop,updateFormData)

    const updateShop = async (e) => {
        e.preventDefault()
        try {
            console.log(updateFormData)
            const res = await axios.post("/shop/update", 
                {   name:updateFormData.name,
                    email:updateFormData.email,
                    ownerName:updateFormData.owner_name,
                    phNumber:updateFormData.ph_number,
                    sellerId:updateFormData.seller_id
                })
            console.log(res)
            if (res.data) {
                toast.success("Shop Updated")
                setEditShop(false)
                setUpdated(true)
            }
        } catch (error) {
            console.log(error)
            toast("Failed to update shop, Try again!")
        }
    }

    toast.configure()
    if (updated) {
        return <Navigate to={`/shop/${updateFormData.name}/home`} />
    }
    return (
        <Fragment>
            {shop && (
                <Modal
                    show={editShop}
                    onHide={() => setEditShop(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Shop
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={4}>Shop Name:</Col>
                                    <Col sm={5}>
                                        <Form className="d-flex" >
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="text"
                                                    placeholder="Shop Name"
                                                    name="name"
                                                    value={shop.name}
                                                    onChange={(e) => setUpdateFormData({ ...updateFormData, name: e.target.value })} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={4}>Owner Name:</Col>
                                    <Col sm={5}>
                                        <Form className="d-flex" >
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="text"
                                                    placeholder="Owner Name"
                                                    name="name"
                                                    value={updateFormData.ownerName}
                                                    onChange={(e) => setUpdateFormData({ ...updateFormData, owner_name: e.target.value })} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>Owner Email:</Col>
                                    <Col sm={5}>
                                        <Form className="d-flex" >
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="text"
                                                    placeholder="Owner email"
                                                    name="email"
                                                    value={updateFormData.email}
                                                    onChange={(e) => setUpdateFormData({ ...updateFormData, email: e.target.value })} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>Contact Number:</Col>
                                    <Col sm={5}>
                                        <Form className="d-flex" >
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="text"
                                                    placeholder="Owner Contact Number"
                                                    name="phNumber"
                                                    value={updateFormData.ph_number}
                                                    onChange={(e) => setUpdateFormData({ ...updateFormData, ph_number: e.target.value })} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button varaint="warning" className="rounded-pill" onClick={(e) => updateShop(e)} >Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Fragment>
    )
}

export default EditShop