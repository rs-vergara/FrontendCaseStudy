import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import CartItem from "../components/CartItem"; // Import CartItem component

const ViewCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", quantity: 1, price: 20 },
    { id: 2, name: "Product B", quantity: 2, price: 15 },
  ]);

  const handleUpdateQuantity = (item, quantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: parseInt(quantity) } : cartItem
    );
    setCart(updatedCart);
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0); // Calculate total items in cart

  return (
    <Container className="py-5">
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemove}
        />
      ))}
      <Row className="justify-content-end mt-4">
        <h4>Total: ₱{calculateTotal().toFixed(2)}</h4>
      </Row>
      <Button variant="primary" className="mt-3">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default ViewCart;
