
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import Buynow from "./Buynow";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from "react";


function App() {
  
  const [isdata,setData]=useState("") 

  const updatedata=(da)=>{
    console.log(da);
    setData(da)
  }
  console.log(isdata);
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Nav/><Home/> <Footer/></>}></Route>
        <Route path="/product" element={<><Nav/><Product updatedata={updatedata} /><Footer/></>}></Route>
        <Route path="/contact" element={<><Nav/><Contact/><Footer/></>}></Route>
        <Route path="/about" element={<><Nav/><About/><Footer/></>}></Route>
        <Route path="/buynow" element={<Buynow items={isdata}/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Buynow/> */}
    </div>
  );
}

export default App;
