import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavComponent from "./components/Nav.js";
import HomePage from "./components/HomePage.js";
import Cont from "./components/cont.js";
import Catalog from "./components/Catalog.js";
import About from "./components/abaout.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HashRouter>
        <NavComponent />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Catalog onImageClick={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </HashRouter>
      {isModalOpen && <Cont open={isModalOpen} onClose={closeModal} product={selectedProduct} />}
    </div>
  );
}

export default App;
