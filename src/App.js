import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Content from "./Home/Content";
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<><Nav/><Home/> <Footer/></>}></Route>
        <Route path="/contact" element={<><Nav/><Contact/><Footer/></>}></Route>
        <Route path="/about" element={<><Nav/><About/><Footer/></>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
