import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <Row className="align-items-center mb-3">
      <Col>{item.name}</Col>
      <Col>
        <input
          type="number"
          value={item.quantity}
          min="1"
          className="form-control"
          onChange={(e) => onUpdateQuantity(item, e.target.value)}
        />
      </Col>
      <Col>${(item.price * item.quantity).toFixed(2)}</Col>
      <Col>
        <Button variant="danger" onClick={() => onRemove(item)}>
          Remove
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
