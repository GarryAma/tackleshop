import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import products from "../product";
import Product from "../components/Product";
import Rating from "../components/Rating";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <h4 className="text-dark">Hi Garry</h4>

        <h2 className="fs-3 text-muted">Our latest products</h2>
        <Row>
          {products.map((product) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                key={product._id}
                className="mb-4"
              >
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
