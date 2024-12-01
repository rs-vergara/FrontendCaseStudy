import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    paymentMethod: "cod",
  });

  const handleInputChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    console.log("Order Confirmed:", shippingDetails);
    alert("Order placed successfully!");
  };

  return (
    <Container className="py-5">
      <h1>Checkout</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={shippingDetails.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your address"
            value={shippingDetails.address}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="payment" className="mt-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            name="paymentMethod"
            value={shippingDetails.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="cod">Cash on Delivery</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" className="mt-4" onClick={handleCheckout}>
          Confirm Order
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
