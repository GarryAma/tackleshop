import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar
        className="bg-transparent border-bottom border-1 border-dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
            TackleShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to={"/cart"}
                className="d-flex align-items-center gap-1"
              >
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/login"}
                className="d-flex align-items-center gap-1"
              >
                <FaUser /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
