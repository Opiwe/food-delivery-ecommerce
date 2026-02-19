import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, title: 'Address', info: '123 Food Street, Delicious City, DC 10001' },
        { icon: <FaPhone />, title: 'Phone', info: '+1 (234) 567-8900' },
        { icon: <FaEnvelope />, title: 'Email', info: 'hello@foodie.com' },
        { icon: <FaClock />, title: 'Hours', info: 'Mon-Sun: 9:00 AM - 11:00 PM' },
    ];

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <Container>
                    <h1 className="contact-title">Contact <span className="highlight">Us</span></h1>
                    <p className="contact-subtitle">We'd love to hear from you! Send us a message</p>
                </Container>
            </div>

            <Container className="contact-content">
                <Row>
                    <Col lg="5" className="mb-4">
                        <Card className="contact-info-card">
                            <CardBody>
                                <h3 className="info-title">Get in Touch</h3>
                                <p className="info-desc">Have questions? We're here to help!</p>
                                
                                <div className="contact-items">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="contact-item">
                                            <div className="contact-icon">{item.icon}</div>
                                            <div className="contact-details">
                                                <h4>{item.title}</h4>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="social-section">
                                    <h4>Follow Us</h4>
                                    <div className="social-links">
                                        <a href="#" className="social-link"><FaFacebook /></a>
                                        <a href="#" className="social-link"><FaInstagram /></a>
                                        <a href="#" className="social-link"><FaTwitter /></a>
                                        <a href="#" className="social-link"><FaYoutube /></a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="7">
                        <Card className="contact-form-card">
                            <CardBody>
                                <h3 className="form-title">Send us a Message</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <label>Your Name</label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <label>Email Address</label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <label>Subject</label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="How can we help?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Message</label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            rows="5"
                                            placeholder="Write your message here..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                    <Button type="submit" className="btn-submit">
                                        <FaPaperPlane /> Send Message
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Card className="map-card">
                    <CardBody>
                        <div className="map-placeholder">
                            <span className="map-emoji">🗺️</span>
                            <p>Interactive map coming soon</p>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Contact;
