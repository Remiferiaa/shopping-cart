import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Shop from "./Components/Shop";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail"
import CartProvider from "./Constant/Provider";
import "./Styles/App.css"


function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<ProductDetail />}></Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
