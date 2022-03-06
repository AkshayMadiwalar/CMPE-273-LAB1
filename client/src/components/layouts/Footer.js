import React, { Fragment } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'

const Footer = () => {
    return (
        <Fragment >
            <Row >
                <Col sm={2}></Col>
                <Col>country</Col>
            </Row>

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Update your Settings</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Fragment>
    )
}

export default Footer