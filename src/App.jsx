import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Home from "./component/Home";
import PageDetail from "./component/PageDetail";
import Product from "./component/Product";
import Slider from "./component/Slider";
import data from "./data/product_card";
import AddToCard from "./component/AddToCard";
import { useState } from "react";
import SignIn from "./component/SignIn";
import Footer from "./component/Footer";
import Sale from "./component/Sale";

function App() {
  console.log(data);
  const [addCart, setAddCart] = useState([]);
  // add to cart

  const addToCartt = (product) => {
    setAddCart([...addCart, product]);
    console.log("AddCart:", addCart);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:id"
          element={<PageDetail data={data} addToCartt={addToCartt} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/addcart" element={<AddToCard CardData={addCart} />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
