import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="bg-body-tertiary p-4">
      <Row>
        <Col xs={4} lg={3} md={4}>
          Pooja Novelty&Gift Center
        </Col>
        <Col xs={4} lg={3} md={4}>
          Products <br />
          nackless <br />
          Bangles <br />
          cosmatics <br />
          Earings <br />
        </Col>
        <Col xs={4} lg={3} md={4}>
          Explore Resource <br />
          blogs <br />
          Contact <br />
        </Col>
        <Col xs={12} lg={3} md={12}>
          Address <br />
          KBHB near gd memorial collages <br />
          jodhpur rajasthan
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col xs={3} lg={3} md={3}>
          <CiFacebook style={{ fontSize: "22px" }} />
        </Col>
        <Col xs={3} lg={3} md={3}>
          <CiInstagram style={{ fontSize: "22px" }} />
        </Col>
        <Col xs={3} lg={3} md={3}>
          <FaWhatsapp style={{ fontSize: "22px" }} />
        </Col>
        <Col xs={3} lg={3} md={3}>
          <IoCallOutline style={{ fontSize: "22px" }} />
        </Col>
      </Row>
      <Row>
        <h6 style={{ textAlign: "center", marginTop: "10px" }}>
          <FaRegCopyright /> 2024 All rights reserved
        </h6>
      </Row>
    </Container>
  );
};
export default Footer;
