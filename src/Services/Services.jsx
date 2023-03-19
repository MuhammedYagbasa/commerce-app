import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./Services.css"
import ServiceData from "../assets/data/serviceData"
function Services() {
    return (
        <Container>
            <Row>
                {ServiceData.map((item, index) => {
                    return (
                        <Col xl="3" lg="4" md="6" sm="6" xs="12" key={index}>
                            <div className="services_item" style={{ backgroundColor: `${item.bg}` }}>
                                <span><i className={item.icon}></i></span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Services