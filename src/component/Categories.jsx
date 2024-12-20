import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "react-bootstrap/Image";
import sale from "../images/sale.png";
import { Link } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease", // Easing function for animations
      once: false, // Whether animations should trigger every time the element is scrolled into view
    });
  }, []);
  return (
    <>
      <Container className="p-3">
        <Row className="cate1">
          <marquee>
            <h3 style={{ marginBottom: "25px" }}>Welcome To Our Store</h3>{" "}
          </marquee>
          <Col
            xs={4}
            lg={2}
            md={4}
            className="cate"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <Link to={"/product"}>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/earring/l/x/8/na-we023-2024-016-vembley-original-imah4ufwzu7eymxf.jpeg?q=70"
                alt=""
              />
            </Link>
            <h6>Earings</h6>
          </Col>
          <Col xs={4} lg={2} md={4} className="cate" data-aos="zoom-in">
            <Link to={"/product"}>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/y/o/a/na-d-2-desi-tamncho-rg-pink-ats-r-pink-brado-jewellery-original-imagta7npjndbqsx.jpeg?q=70"
                alt=""
              />
            </Link>
            <h6>Nackless</h6>
          </Col>
          <Col xs={4} lg={2} md={4} className="cate" data-aos="fade-left">
            <Link to={"/product"}>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/kqe3low0/bangle-bracelet-armlet/u/0/r/free-free-size-1-ybbn-91013-you-bella-original-imag4et9qxzmmyur.jpeg?q=70"
                alt=""
              />
            </Link>
            <h6>Bangles</h6>
          </Col>
          <Col xs={4} lg={2} md={3} className="cate" data-aos="fade-right">
            <Link to={"/product"}>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/vanity-box/g/g/t/makeup-kit-for-girls-makeup-case-cosmetic-bag-brush-organizer-original-imah6dnkvgvyggyq.jpeg?q=70"
                alt=""
              />{" "}
            </Link>
            <h6>Cosmatics</h6>
          </Col>
          <Col xs={4} lg={2} md={4} className="cate" data-aos="zoom-in-up">
            <Link to={"/product"}>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/m/t/x/free-2-7-na-1-ffbl149-ab-fashion-frill-original-imah5f3cyzzrgezf.jpeg?q=70"
                alt=""
              />
            </Link>
            <h6>braclet</h6>
          </Col>
          <Col xs={4} lg={2} md={4} className="cate" data-aos="fade-left">
            <Link to={"/product"}>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/valentine-gift-set/w/a/e/valentine-s-day-red-heart-box-with-red-rose-couple-ring-set-original-imagmcj66fxdyn3f.jpeg?q=70"
                alt=""
              />
            </Link>
            <h6>Gifts</h6>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Image src={sale} fluid style={{ borderRadius: "28px" }} />
        </Row>
      </Container>
    </>
  );
};
export default Categories;
