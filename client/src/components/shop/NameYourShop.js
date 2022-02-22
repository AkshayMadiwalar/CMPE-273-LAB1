import React, { Fragment } from 'react'
import { Button, InputGroup, Card, FormControl, Badge } from 'react-bootstrap'

const NameYourShop = () => {
    return (
        <Fragment>
            <div style={{ marginLeft: "15%", marginRight: "15%", marginTop: "10%" }}>
                <h3 style={{ textAlign: 'center' }}>Name your Shop</h3>
                <h5 style={{ fontWeight: "lighter", textAlign: 'center' }}>Choose a memorable name that reflects your style</h5>
            </div>
            <br />
            <Card>
                <Card.Body style={{ marginLeft: "15%", marginRight: "15%" }}>
                    <InputGroup >
                        <FormControl
                            placeholder="Enter your shop name"
                            aria-label="name"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"><Button variant="warning">Check Availability</Button></InputGroup.Text>
                    </InputGroup>
                </Card.Body>
            </Card>
            <br />
            <div style={{ marginLeft: "15%", marginRight: "15%", textAlign: 'center'}}>
                <h3><Badge  bg="success"><i class="fa fa-check" aria-hidden="true"></i>{' '}Available</Badge></h3><br/>
                <span style={{textDecoration:'underline',cursor:'pointer'}}>Go ahead and create your new Shop</span>
            </div>

        </Fragment>
    )
}

export default NameYourShop