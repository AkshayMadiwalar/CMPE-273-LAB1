import React from 'react'
import {Col,Form,Modal,Button, Row} from 'react-bootstrap'

const ApplyFilters = ({showApplyFilter,setShowApplyFilter}) => {
    return (
        <Modal
            show={showApplyFilter}
            onHide={()=>setShowApplyFilter(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={2}>Category</Col>
                    <Col sm={1}></Col>
                    <Col>
                        <Form.Check type='radio' label='Clothing' value="Clothing"/>
                        <Form.Check type='radio' label='Jewelry' value="Jewelry"/>
                        <Form.Check type='radio' label='Entertainment' value="Entertainment"/>
                        <Form.Check type='radio' label='Art' value="Art"/>
                        <Form.Check type='radio' label='Home Decor' value="Home Decor"/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={2}>Price Range</Col>
                    <Col sm={1}></Col>
                    <Col>
                        <Form.Check type='radio' label='Any Price' value="Any Price"/>
                        <Form.Check type='radio' label='Under $50' value="Under50"/>
                        <Form.Check type='radio' label='Under $75' value="Under75"/>
                        <Form.Check type='radio' label='Under $100' value="Under100"/>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setShowApplyFilter(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ApplyFilters