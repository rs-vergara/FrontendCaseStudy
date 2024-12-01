import React, { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy Data: Hardcoded credentials for testing
    if (credentials.username === "admin" && credentials.password === "admin123") {
      login("admin-token");
      navigate("/admin");
    } else if (credentials.username === "user" && credentials.password === "user123") {
      login("user-token");
      navigate("/products");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container className="py-5">
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

