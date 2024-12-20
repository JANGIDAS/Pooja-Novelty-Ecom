import React from "react";
import Slider from "./Slider";
import "./product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import Sale from "./Sale";

const Home = ({ data }) => {
  console.log(data);
  const maxdata = data.slice(7, 11);
  return (
    <>
      <Slider />
      <Container style={{ marginBottom: "38px" }}>
        <h4
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            margin: "20px",
          }}
        >
          our products
        </h4>
        <Row className="lgs">
          {maxdata.map((i) => (
            <Col xs={6} lg={3} md={6} className="lts">
              <Link to={`/product/${i.id}`} key={i.id}>
                <div
                  className="card"
                  data-aos="flip-up"
                  style={{ height: "180px" }}
                >
                  <div className="card-img">
                    <img src={i.thumb} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body" style={{ height: "170px" }}>
                    <p style={{ fontWeight: "bold" }}>{i.name}</p>
                    <p style={{ color: "green" }}>price:{i.price}</p>
                    {/* <p style={{color:'red', textDecoration:'line-through'}}>price:654</p> */}
                    {/* <p>decription : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    {/* <button className='add-btn'> add to card</button>
                <button className='add-btn'>buy now</button> */}
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Sale />
    </>
  );
};
export default Home;
