import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./about.css";
import abt from "../images/abt.png";

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="abt-img">
            <img
              src="https://cosma.wpengine.com/wp-content/uploads/2021/03/about-img.jpg"
              alt=""
              className="img-fluidv about-img"
            />
          </Col>

          <Col xs={12} md={6} lg={6}>
            <div className="about-contain">
              <h2>About Our</h2>
              <h2>Iconic Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec
                consectetur nisi eu mauris auctor, in egestodio mollis phasellus
                urna lacus.
              </p>
            </div>
            <h5 className="about-more">
              Know More <IoIosArrowRoundForward />
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
