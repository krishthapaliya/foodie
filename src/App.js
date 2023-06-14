import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import MenuBar from "./Menu/MenuBar";
import Services from "./Services/Services";
import AboutUs from "./About us/AboutUs";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Foodie" >
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="menu" element={<MenuBar />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;



