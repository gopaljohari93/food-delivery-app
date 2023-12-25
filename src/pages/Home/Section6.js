import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import User1 from "../../assets/blog/review-author-1.webp";
import User2 from "../../assets/blog/review-author-2.webp";
import User3 from "../../assets/blog/review-author-3.webp";
import User4 from "../../assets/blog/review-author-5.webp";


function Section6() {
    return (
        <section className="blog_section">
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User1} className="img-fluid" alt="User-1" />
                                </div>
                                <p>" Etiam ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, tellus quis rutrum ultrices, est arcu finibus orci, vel aliquet nunc magna ut sapien. Pellentesque fringilla sit "
                                </p>
                                <div className="item_rating mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User2} className="img-fluid" alt="User-2" />
                                </div>
                                <p>" Etiam ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, tellus quis rutrum ultrices, est arcu finibus orci, vel aliquet nunc magna ut sapien. Pellentesque fringilla sit "
                                </p>
                                <div className="item_rating mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User3} className="img-fluid" alt="User-2" />
                                </div>
                                <p>" Etiam ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, tellus quis rutrum ultrices, est arcu finibus orci, vel aliquet nunc magna ut sapien. Pellentesque fringilla sit "
                                </p>
                                <div className="item_rating mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User4} className="img-fluid" alt="User-4" />
                                </div>
                                <p>" Etiam ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, tellus quis rutrum ultrices, est arcu finibus orci, vel aliquet nunc magna ut sapien. Pellentesque fringilla sit "
                                </p>
                                <div className="item_rating mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section6;