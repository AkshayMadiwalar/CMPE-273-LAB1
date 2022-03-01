import React, { Fragment, useEffect, useState } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import ApplyFilters from './ApplyFilters'

const ProductList = () => {
    
    useEffect(async ()=>{
        
    },[])

    const [showApplyFilter,setShowApplyFilter] = useState(false)

    return (
        <Fragment>
            <Row style={{ margin: 30 }}>
                <Col sm={2}>
                    <Button style={{ width: "100%" }} className='rounded-pill' onClick={()=>setShowApplyFilter(true)} variant='outline-secondary'>All filters</Button>
                </Col>
                <Col sm={8}></Col>
                <Col sm={2}>
                    <Form.Select aria-label="Default select example"  className='rounded-pill'>
                        <option>Sort By</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
            </Row>

            {showApplyFilter && (
                <ApplyFilters 
                    showApplyFilter={showApplyFilter}
                    setShowApplyFilter={setShowApplyFilter}
                />
            )}
        </Fragment>
    )
}

export default ProductList