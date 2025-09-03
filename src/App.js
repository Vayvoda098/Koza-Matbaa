import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavComponent from "./components/Nav.js";
import Cont from "./components/cont.js";
import MovingText from "./components/text.js"
import Catalog from "./components/Catalog.js";

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
    <div>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={ <MovingText/>} />
          <Route path="/products" element={<Catalog onImageClick={openModal} />} />
          {/* You can add other routes here */}
        </Routes>
      </BrowserRouter>
      {isModalOpen && <Cont open={isModalOpen} onClose={closeModal} product={selectedProduct} />}
    </div>
  );
}

export default App;
