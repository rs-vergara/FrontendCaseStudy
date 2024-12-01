import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Cart state

  // Dummy data to simulate the product list
  const dummyData = [
    { barcode: "12345", description: "Product 1", price: 20.0, quantity: 10, category: "Electronics" },
    { barcode: "67890", description: "Product 2", price: 30.0, quantity: 5, category: "Clothing" },
    { barcode: "11223", description: "Product 3", price: 15.0, quantity: 8, category: "Accessories" },
  ];

  useEffect(() => {
    // Simulating data fetch with a timeout
    setTimeout(() => {
      setProducts(dummyData);
      setLoading(false); // Stop the loading spinner after 2 seconds
    }, 2000);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.barcode === product.barcode);
    
    if (existingProduct) {
      // If the product is already in the cart, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart); // Update the cart state
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Get total item count in the cart

  return (
    <Container className="py-5">
      <h1>Product List</h1>
      <Link to="/cart">
        <Button variant="light" className="position-relative m-2">
          <FaShoppingCart size={24} />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{cartItemCount}</span>
        </Button>
      </Link>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.barcode} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{product.description}</Card.Title>
                  <Card.Text>Price: ₱{product.price}</Card.Text>
                  <Button variant="info" className="m-2">
                    View Details
                  </Button>
                  <Button variant="success" className="m-2" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;
