import React from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaHamburger, FaIceCream, FaLeaf, FaMotorcycle, FaStar, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const features = [
        { icon: <FaMotorcycle />, title: 'Fast Delivery', desc: 'Hot food delivered in 30 mins' },
        { icon: <FaLeaf />, title: 'Fresh Ingredients', desc: '100% organic & healthy' },
        { icon: <FaStar />, title: 'Best Quality', desc: 'Rated by 10,000+ customers' },
    ];

    const popularFoods = [
        { name: 'Pepperoni Pizza', price: '$15.99', image: '🍕', rating: 4.8 },
        { name: 'Classic Burger', price: '$12.99', image: '🍔', rating: 4.6 },
        { name: 'Sushi Platter', price: '$24.99', image: '🍣', rating: 4.9 },
        { name: 'Ice Cream Bowl', price: '$8.99', image: '🍨', rating: 4.7 },
    ];

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <Container>
                    <Row className="align-items-center min-vh-100">
                        <Col lg="6">
                            <div className="hero-content">
                                <span className="hero-badge">🍔 Hot & Fresh</span>
                                <h1 className="hero-title">
                                    Delicious Food
                                    <span className="title-highlight"> Delivered</span>
                                    <br />To Your Door
                                </h1>
                                <p className="hero-desc">
                                    Experience the finest culinary delights from top restaurants. 
                                    Order now and get exclusive discounts on your first order!
                                </p>
                                <div className="hero-btns">
                                    <Link to="/foods">
                                        <Button className="btn-order-now">
                                            Order Now <FaArrowRight />
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button className="btn-contact">
                                            Contact Us
                                        </Button>
                                    </Link>
                                </div>
                                <div className="hero-stats">
                                    <div className="stat-item">
                                        <span className="stat-number">50K+</span>
                                        <span className="stat-label">Happy Customers</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">100+</span>
                                        <span className="stat-label">Restaurants</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">4.9</span>
                                        <span className="stat-label">Rating</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero-images">
                                <div className="food-floating food-1">🍕</div>
                                <div className="food-floating food-2">🍔</div>
                                <div className="food-floating food-3">🍟</div>
                                <div className="hero-main-img">
                                    <div className="img-circle">
                                        <span className="emoji-food">🍔</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="features-section">
                <Container>
                    <Row>
                        {features.map((feature, index) => (
                            <Col lg="4" key={index}>
                                <Card className="feature-card">
                                    <CardBody>
                                        <div className="feature-icon">{feature.icon}</div>
                                        <h3 className="feature-title">{feature.title}</h3>
                                        <p className="feature-desc">{feature.desc}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="popular-foods-section">
                <Container>
                    <div className="section-header">
                        <span className="section-subtitle">Popular Dishes</span>
                        <h2 className="section-title">Customer Favorites</h2>
                    </div>
                    <Row>
                        {popularFoods.map((food, index) => (
                            <Col lg="3" md="6" key={index}>
                                <Card className="food-card">
                                    <CardBody>
                                        <div className="food-emoji">{food.image}</div>
                                        <div className="food-rating">
                                            <FaStar /> {food.rating}
                                        </div>
                                        <h4 className="food-name">{food.name}</h4>
                                        <p className="food-price">{food.price}</p>
                                        <Button className="btn-add-cart">Add to Cart</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="cta-section">
                <Container>
                    <div className="cta-box">
                        <h2 className="cta-title">Hungry? Order Now!</h2>
                        <p className="cta-desc">Get 20% off on your first order with code FIRST20</p>
                        <Link to="/foods">
                            <Button className="btn-cta">Explore Foods</Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;
