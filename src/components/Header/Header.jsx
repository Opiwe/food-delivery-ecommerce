import React, { useState } from 'react';
import { Container, Navbar, Nav, NavbarToggler, Collapse, NavLink, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaShoppingCart, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar className="header" expand="md" fixed="top">
            <Container>
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">🍕</span>
                    <span className="brand-text">Foodie</span>
                </Link>
                
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="toggler-btn">
                    <span className="toggler-icon"></span>
                </NavbarToggler>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavLink tag={Link} to="/" className="nav-item-custom">
                            <FaHome style={{ marginRight: '6px' }} /> Home
                        </NavLink>
                        <NavLink tag={Link} to="/foods" className="nav-item-custom">
                            <FaUtensils style={{ marginRight: '6px' }} /> Foods
                        </NavLink>
                        <NavLink tag={Link} to="/cart" className="nav-item-custom cart-link">
                            <FaShoppingCart /> Cart
                            <Badge color="danger" className="cart-badge">3</Badge>
                        </NavLink>
                        <NavLink tag={Link} to="/contact" className="nav-item-custom">
                            <FaEnvelope style={{ marginRight: '6px' }} /> Contact
                        </NavLink>
                        <NavLink tag={Link} to="/login" className="nav-item-custom btn-login" style={{ color: '#ffffff' }}>
                            <FaSignInAlt style={{ marginRight: '6px', color: '#ffffff' }} /> Login
                        </NavLink>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
