import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import api from "../api/api";

const AddProduct = () => {
  const [product, setProduct] = useState({
    barcode: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products", product);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Container className="py-5">
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="barcode" className="mb-3">
          <Form.Label>Item Barcode</Form.Label>
          <Form.Control
            type="text"
            name="barcode"
            placeholder="Enter barcode"
            value={product.barcode}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="quantity" className="mb-3">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={product.quantity}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="category" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Enter category"
            value={product.category}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
