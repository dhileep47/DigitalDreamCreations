import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import Buynow from "./Buynow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isdata, setData] = useState("");

  const updatedata = (da) => {
    console.log(da);
    setData(da);
  };
  console.log(isdata);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/product"
            element={<Product updatedata={updatedata} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/buynow"
            element={<Buynow items={isdata} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
