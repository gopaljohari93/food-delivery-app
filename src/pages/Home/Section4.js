import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PromotionImage from "../../assets/promotion/pro.webp";

function Section4() {
    return (
        <>
            <section className="promotion_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center mb-5 mb-lg-0">
                        <img src={PromotionImage} className="img-fluid" alt="Promotion" />
                        </Col>
                        <Col lg={6} className="px-5">
                            <h2>Nothing brings people together like a good burger</h2>
                            <p>Semper ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac maximus dolor. Morbi molestie sem eu tristique malesuada. Cras malesuada pretium nisl quis ultricies. Donec posuere vel ipsum id ultricies. Vestibulum aliquet turpis at aliquam.
                            </p>
                            <ul>
                                <li>
                                    <p>Consectetur adipiscing elit. Nunc ac maximus dolor. Morbi molestie sem eu tristique malesuada.</p>
                                </li>
                                <li>
                                    <p>Morbi molestie sem eu tristique malesuada.</p>
                                </li>
                                <li>
                                    <p>Adipiscing elit Nunc ac maximus dolor. Morbi molestie sem eu tristique malesuada.</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* BG Parallax Scroll */}
            <section className="bg_parallax_scroll"></section>

        </>
    )
}

export default Section4;