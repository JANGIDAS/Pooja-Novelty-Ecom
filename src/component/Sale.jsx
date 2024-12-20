import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import one from "../images/one.png";

import two from "../images/two.png";
import three from "../images/three.png";

const Sale = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={6} style={{ padding: "10px" }}>
          <img src={one} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} md={12} lg={6} style={{ padding: "10px" }}>
          <Row>
            {" "}
            <img src={two} alt="" className="img-fluid" />
          </Row>
          <Row>
            {" "}
            <img src={three} alt="" className="img-fluid" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Sale;
