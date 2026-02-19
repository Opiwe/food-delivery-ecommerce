import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave">
                <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ff6b35" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
            <Container>
                <Row>
                    <Col lg="4" md="6" className="mb-4">
                        <div className="footer-brand">
                            <Link to="/" className="brand">
                                <span className="brand-icon">🍕</span>
                                <span className="brand-text">Foodie</span>
                            </Link>
                            <p className="footer-desc">
                                Delivering happiness to your doorstep. The best food from the best restaurants, 
                                just a click away!
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link"><FaFacebook /></a>
                                <a href="#" className="social-link"><FaInstagram /></a>
                                <a href="#" className="social-link"><FaTwitter /></a>
                                <a href="#" className="social-link"><FaYoutube /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" md="6" className="mb-4">
                        <div className="footer-links">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/foods">Foods</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="2" md="6" className="mb-4">
                        <div className="footer-links">
                            <h4 className="footer-title">Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4" md="6" className="mb-4">
                        <div className="footer-contact">
                            <h4 className="footer-title">Contact Us</h4>
                            <ul>
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>123 Food Street, Delicious City</span>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <span>+1 234 567 890</span>
                                </li>
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <span>hello@foodie.com</span>
                                </li>
                                <li>
                                    <FaClock className="contact-icon" />
                                    <span>Mon - Sun: 9:00 AM - 11:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="footer-bottom">
                            <p>&copy; 2024 Foodie. All rights reserved.</p>
                            <div className="payment-methods">
                                <span>💳 💵 🏦</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
