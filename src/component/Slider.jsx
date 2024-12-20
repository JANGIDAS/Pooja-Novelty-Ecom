import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../images/ban2.png";
import banner2 from "../images/ban1.png";
import banner3 from "../images/ban3.png";
import Categories from "./Categories";

const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src={banner} alt="" width={"100%"} className="img-fluid" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner2} alt="" width={"100%"} className="img-fluid" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner3} alt="" width={"100%"} className="img-fluid" />
        </Carousel.Item>
      </Carousel>
      <Categories />
    </>
  );
};
export default Slider;
