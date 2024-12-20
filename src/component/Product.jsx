import React from "react";
import "./product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import products from "../data/product_card";
import { Link } from "react-router-dom";

const Product = () => {
  console.log(products);
  return (
    <Container>
      <Row className="lgs">
        {products.map((i) => (
          <Col xs={6} lg={3} md={6} className="lts">
            <Link to={`/product/${i.id}`} key={i.id}>
              <div className="card">
                <div className="card-img">
                  <img src={i.thumb} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <p style={{ fontWeight: "bold" }}>{i.name}</p>
                  <p style={{ color: "green" }}>price:{i.price}</p>
                  <p style={{ color: "red", textDecoration: "line-through" }}>
                    price:654
                  </p>
                  <p>
                    decription : Lorem ipsum dolor sit amet consectetur adipt.
                  </p>
                  <button className="add-btn"> add to card</button>
                  <button className="buy-btn">buy now</button>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Product;
