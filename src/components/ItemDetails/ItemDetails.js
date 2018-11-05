import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >
                { this.state.open === false ? `See` : `Hide `} item details
                { this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img 
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://i5.walmartimages.com/asr/28d988d8-c5a8-4e5e-b7b3-e9bd2905f3e4_1.41be1c15c7cc4ba6357515de48b00338.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> {`$${this.props.price}`} </strong>
                                            <br />
                                            <strong className="price-strike"> 
                                                {`$${this.props.price}`}
                                            </strong>
                                        </Col>
                                            <Col md={6}> Qty: 1 </Col>
                                    </Row>
                                </Media.Body>
                            </Media>

                        </Well>

                    </div>
                </Collapse>
            </div>
        )
    }
}