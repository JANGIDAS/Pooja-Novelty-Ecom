import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./about.css";

const SignIn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="p-4 m-2">
      <Row>
        <Col>
          <h4 style={{ textAlign: "center" }}>login</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmai">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="inp" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="inp2" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="agree" />
              <label htmlFor="" style={{ textDecoration: "underline" }}>
                Forget Password
              </label>
            </Form.Group>
            <Button
              style={{
                marginRight: "8px",
                backgroundColor: "black",
                color: "white",
              }}
              type="submit"
            >
              Log in
            </Button>
            <Button
              style={{
                marginRight: "8px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={handleShow}
            >
              sign up
            </Button>
          </Form>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Mobile number"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Email </Form.Label>
              <Form.Control type="email" placeholder="Usermail Id" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create Password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default SignIn;
