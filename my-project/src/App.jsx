import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Product from "./Component/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;