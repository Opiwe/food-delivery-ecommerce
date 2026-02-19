import React, { useState } from 'react';
import { Container, Row, Col, Input, InputGroup, InputGroupText, Button, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar, FaShoppingCart, FaHeart, FaFire, FaLeaf } from 'react-icons/fa';
import './AllFoods.css';

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Foods', icon: '🍽️' },
        { id: 'pizza', label: 'Pizza', icon: '🍕' },
        { id: 'burger', label: 'Burgers', icon: '🍔' },
        { id: 'sushi', label: 'Sushi', icon: '🍣' },
        { id: 'dessert', label: 'Desserts', icon: '🧁' },
        { id: 'drinks', label: 'Drinks', icon: '🥤' },
    ];

    const foods = [
        { id: 1, name: 'Pepperoni Pizza', category: 'pizza', price: 15.99, rating: 4.8, image: '🍕', popular: true },
        { id: 2, name: 'Classic Cheeseburger', category: 'burger', price: 12.99, rating: 4.6, image: '🍔', popular: true },
        { id: 3, name: 'Salmon Sushi', category: 'sushi', price: 24.99, rating: 4.9, image: '🍣', popular: false },
        { id: 4, name: 'Chocolate Cake', category: 'dessert', price: 8.99, rating: 4.7, image: '🍰', popular: true },
        { id: 5, name: 'Margherita Pizza', category: 'pizza', price: 14.99, rating: 4.5, image: '🍕', popular: false },
        { id: 6, name: 'Chicken Wings', category: 'burger', price: 11.99, rating: 4.4, image: '🍗', popular: false },
        { id: 7, name: 'Tuna Sashimi', category: 'sushi', price: 22.99, rating: 4.8, image: '🍣', popular: false },
        { id: 8, name: 'Ice Cream Sundae', category: 'dessert', price: 7.99, rating: 4.6, image: '🍨', popular: true },
        { id: 9, name: 'Fresh Orange Juice', category: 'drinks', price: 5.99, rating: 4.3, image: '🧃', popular: false },
        { id: 10, name: 'Veggie Burger', category: 'burger', price: 13.99, rating: 4.5, image: '🥗', popular: false, healthy: true },
        { id: 11, name: 'BBQ Chicken Pizza', category: 'pizza', price: 17.99, rating: 4.7, image: '🍕', popular: true },
        { id: 12, name: 'Mango Smoothie', category: 'drinks', price: 6.99, rating: 4.4, image: '🥭', popular: false },
    ];

    const filteredFoods = foods.filter(food => {
        const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="foods-page">
            <div className="foods-hero">
                <Container>
                    <h1 className="foods-title">Our <span className="highlight">Menu</span></h1>
                    <p className="foods-subtitle">Discover delicious food from top restaurants</p>
                    
                    <div className="search-box">
                        <InputGroup>
                            <InputGroupText><FaSearch /></InputGroupText>
                            <Input 
                                placeholder="Search for food..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </Container>
            </div>

            <Container className="foods-content">
                <div className="category-filters">
                    {categories.map(cat => (
                        <Button 
                            key={cat.id}
                            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            <span className="cat-icon">{cat.icon}</span>
                            <span className="cat-label">{cat.label}</span>
                        </Button>
                    ))}
                </div>

                <Row>
                    {filteredFoods.map(food => (
                        <Col lg="3" md="4" sm="6" key={food.id}>
                            <Card className="food-card">
                                <div className="food-image-wrapper">
                                    <span className="food-emoji">{food.image}</span>
                                    {food.popular && (
                                        <span className="badge-popular">
                                            <FaFire /> Popular
                                        </span>
                                    )}
                                    {food.healthy && (
                                        <span className="badge-healthy">
                                            <FaLeaf /> Healthy
                                        </span>
                                    )}
                                    <button className="btn-wishlist">
                                        <FaHeart />
                                    </button>
                                </div>
                                <CardBody>
                                    <div className="food-rating">
                                        <FaStar className="star-icon" />
                                        <span>{food.rating}</span>
                                    </div>
                                    <h3 className="food-name">{food.name}</h3>
                                    <p className="food-price">${food.price.toFixed(2)}</p>
                                    <Button className="btn-add-cart">
                                        <FaShoppingCart /> Add to Cart
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {filteredFoods.length === 0 && (
                    <div className="no-results">
                        <span className="no-results-emoji">🔍</span>
                        <h3>No foods found</h3>
                        <p>Try searching with different keywords</p>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AllFoods;
