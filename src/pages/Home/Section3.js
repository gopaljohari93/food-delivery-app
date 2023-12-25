import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../../assets/menu/burger-11.webp";
import Image2 from "../../assets/menu/burger-12.webp";
import Image3 from "../../assets/menu/burger-13.webp";
import Image4 from "../../assets/menu/burger-14.webp";
import Image5 from "../../assets/menu/burger-15.webp";
import Image6 from "../../assets/menu/burger-16.webp";
import Image7 from "../../assets/menu/burger-17.webp";
import Image8 from "../../assets/menu/burger-18.webp";
import Cards from '../../components/Layout/Cards';
import { Link } from 'react-router-dom';

// Mock Data Cards
const mockData = [
    {
        id: "0001",
        image: Image1,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomotoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,
    },
    {
        id: "0002",
        image: Image2,
        title: "Ultimate Bacon",
        paragraph: "House patty, chilli sauce, tomotoes, pickles, coleslaw",
        rating: 4.5,
        price: 69.15,
    },
    {
        id: "0003",
        image: Image3,
        title: "Black Sheep",
        paragraph: "American cheese, chilli sauce, tomotoes, pickles, coleslaw",
        rating: 4,
        price: 99.15,
    },
    {
        id: "0004",
        image: Image4,
        title: "Vegan Burger",
        paragraph: "House patty, chilli sauce, tomotoes, pickles, coleslaw",
        rating: 3.5,
        price: 99.25,
    },
    {
        id: "0005",
        image: Image5,
        title: "Double Burger",
        paragraph: "2 pattles, chilli sauce, tomotoes, pickles, coleslaw",
        rating: 3,
        price: 59.25,
    },
    {
        id: "0006",
        image: Image6,
        title: "Turkey Burger",
        paragraph: "Turkey, chilli sauce, tomotoes, pickles, coleslaw",
        rating: 3,
        price: 79.18,
    },
    {
        id: "0007",
        image: Image7,
        title: "Smokey House",
        paragraph: "patty, cheddar cheese, sauce, tomotoes, pickles, coleslaw",
        rating: 2.5,
        price: 99.19,
    },
    {
        id: "0008",
        image: Image8,
        title: "Classic Burger",
        paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
        rating: 2,
        price: 89.12,
    },
    // Add more mock data objects as needed
]

// Rating Logical Data
const renderRatingIcons = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (rating > 0.5) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--
        } else if (rating > 0 && rating < 1) {
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            rating--
        } else {
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
        }
    }
    return stars;
};


function Section3() {
    return (
        <section className="menu_section">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
                        <h2>OUR CRAZY BURGERS</h2>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius sed sapien sed malesuada.</p>
                    </Col>
                </Row>
                <Row>{mockData.map((cardData, index) => (
                    <Cards
                        key={index}
                        image={cardData.image}
                        rating={cardData.rating}
                        title={cardData.title}
                        paragraph={cardData.paragraph}
                        price={cardData.price}
                        renderRatingIcons={renderRatingIcons}
                    />
                ))}
                </Row>

                <Row className="pt-5">
                    <Col sm={6} lg={5}>
                        <div className="ads_box ads_img1 mb-5 mb-md-0">
                            <h4 className="mb-0">GET YOUR FREE</h4>
                            <h5>CHEESE FRIES</h5>
                            <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
                        </div>
                    </Col>
                    <Col sm={6} lg={7}>
                        <div className="ads_box ads_img2">
                            <h4 className="mb-0">GET YOUR FREE</h4>
                            <h5>CHEESE FRIES</h5>
                            <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
                        </div>
                    </Col>
                </Row>


            </Container>
        </section>
    )
}

export default Section3;