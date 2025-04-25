import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./components/GalleryPage";
import ShopPage from "./components/ShopPage";
import ProductPage from "./components/ProductPage";
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App
