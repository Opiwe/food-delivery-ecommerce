import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTrash, FaShoppingBasket, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Pepperoni Pizza', price: 15.99, quantity: 2, image: '🍕' },
        { id: 2, name: 'Classic Cheeseburger', price: 12.99, quantity: 1, image: '🍔' },
        { id: 3, name: 'Chocolate Cake', price: 8.99, quantity: 1, image: '🍰' },
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems(items => items.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2.99;
    const total = subtotal + deliveryFee;

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <Container>
                    <div className="empty-cart">
                        <span className="empty-emoji">🛒</span>
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven't added any food yet</p>
                        <Link to="/foods">
                            <Button className="btn-browse">Browse Foods</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <Container>
                <div className="cart-header">
                    <h1 className="cart-title">Your <span className="highlight">Cart</span></h1>
                    <p className="cart-subtitle">{cartItems.length} delicious items in your cart</p>
                </div>

                <Row>
                    <Col lg="8">
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <Card key={item.id} className="cart-item-card">
                                    <CardBody>
                                        <div className="cart-item">
                                            <div className="item-image">
                                                <span className="item-emoji">{item.image}</span>
                                            </div>
                                            <div className="item-details">
                                                <h3 className="item-name">{item.name}</h3>
                                                <p className="item-price">${item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="quantity-controls">
                                                <button 
                                                    className="qty-btn"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="qty-value">{item.quantity}</span>
                                                <button 
                                                    className="qty-btn"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <div className="item-total">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                            <button 
                                                className="btn-remove"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>

                        <Link to="/foods" className="continue-shopping">
                            <FaArrowLeft /> Continue Shopping
                        </Link>
                    </Col>

                    <Col lg="4">
                        <Card className="order-summary-card">
                            <CardBody>
                                <h3 className="summary-title">Order Summary</h3>
                                
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery Fee</span>
                                    <span>${deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="summary-divider"></div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>

                                <Button className="btn-checkout">
                                    Proceed to Checkout <FaArrowRight />
                                </Button>

                                <div className="secure-checkout">
                                    <span>🔒 Secure checkout</span>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="delivery-info-card">
                            <CardBody>
                                <h4 className="delivery-title">Delivery Information</h4>
                                <div className="delivery-option">
                                    <input type="radio" defaultChecked name="delivery" />
                                    <span>Delivery</span>
                                    <span className="time">30-45 min</span>
                                </div>
                                <div className="delivery-option">
                                    <input type="radio" name="delivery" />
                                    <span>Pickup</span>
                                    <span className="time">20 min</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
