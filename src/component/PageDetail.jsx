import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { IoStarHalf } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import "./pagedatail.css";

const PageDetail = ({ data, addToCartt }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} md={12} key={product.id}>
          <div className="dtl-img">
            <img src={product.thumb} alt={product.name} />
          </div>
        </Col>
        <Col xs={12} lg={6} md={12}>
          <div className="dtl-text">
            <h6>{product.name}</h6>
            <h4>Special price</h4>
            <h4>{product.price} 14% off</h4>
            <h6 style={{ color: "gold" }}>
              <IoIosStar /> <IoStarHalf /> <CiStar />
            </h6>
            <h2>Available offers</h2>
            <p>
              Special Price: Get extra 5% off (price inclusive of
              cashback/coupon) T&C
              <br />
              Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit
              Card T&C
            </p>
            <h6>{product.description}</h6>
            <button
              onClick={() => addToCartt(product)}
              className="btn btn-dark btn-block"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="btn btn-success btn-block"
            >
              Buy Now
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageDetail;
