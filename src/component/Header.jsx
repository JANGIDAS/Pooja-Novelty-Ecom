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
import "./head.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="linkss">
          <Navbar.Brand href="/">Pooja Novelty&Gifts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link>
                <Link to={"/"} className="navi">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/about"} className="navi">
                  ABOUT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/product"} className="navi">
                  PRODUCT
                </Link>
              </Nav.Link>
              <NavDropdown title="COSMATICS" id="collapsible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/product"} className="navi">
                    LIPSTICS
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/product"} className="navi">
                    NAIL POLISH
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/product"} className="navi">
                    CREAM POWDERS
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>
              <Link to={"/addcart"} className="navi">
                <FaCartShopping className="icons" /></Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to={"/login"} className="navi">
                  <CiUser className="icons" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
