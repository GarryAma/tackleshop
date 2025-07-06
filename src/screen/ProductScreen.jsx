import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../product";
import { IoReturnDownBackOutline } from "react-icons/io5";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();

  //filter the product
  const product = products.find((product) => product._id === productId);

  return (
    <div>
      <Link to={"/"} className="mb-5 d-inline-block">
        <Button variant="dark">
          <IoReturnDownBackOutline className="me-2" />
          <span>Back</span>
        </Button>
      </Link>
      <Row>
        <Col md={4}>
          <div className="border rounded overflow-hidden p-1">
            <Image
              src={product.image}
              alt={product.image}
              fluid
              className="w-100"
            />
          </div>
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h5>{product.name}</h5>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={product.numReviews} />
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <>
                        <strong>Available</strong> for Order
                      </>
                    ) : (
                      <>
                        <strong>Out of Stock</strong>
                      </>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button disabled={product.countInStock === 0} variant="dark">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
