import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h-100">
      <Link to={`/product/${product._id}`} className="h-75 d-block">
        <CardImg src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title className="text-dark">
            <strong
              className="fs-6"
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              {product.name}
            </strong>
          </Card.Title>
        </Link>

        <div className="mb-4">
          <Rating value={product.rating} text={product.numReviews} />
        </div>

        <Card.Text className="fs-5 fw-bold text-muted">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
