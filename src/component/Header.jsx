import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import "./about.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Pooja Novelty&Gifts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/product">PRODUCT</Nav.Link>
              <NavDropdown title="COSMATICS" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/product"><Link to={'/product'}>LIPSTICS</Link></NavDropdown.Item>
                <NavDropdown.Item href="/product">NAIL POLISH</NavDropdown.Item>
                <NavDropdown.Item href="/product">
                  CREAM POWDERS
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/addcart">
                <FaCartShopping className="icons" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                <CiUser className="icons" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
