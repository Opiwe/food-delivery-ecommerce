import React, { useState } from 'react';
import { Container, Navbar, Nav, NavbarToggler, Collapse, NavLink, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
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
                            Home
                        </NavLink>
                        <NavLink tag={Link} to="/foods" className="nav-item-custom">
                            Foods
                        </NavLink>
                        <NavLink tag={Link} to="/cart" className="nav-item-custom cart-link">
                            Cart
                            <Badge color="danger" className="cart-badge">3</Badge>
                        </NavLink>
                        <NavLink tag={Link} to="/contact" className="nav-item-custom">
                            Contact
                        </NavLink>
                        <NavLink tag={Link} to="/login" className="nav-item-custom btn-login">
                            Login
                        </NavLink>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
