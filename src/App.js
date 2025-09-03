import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={ <MovingText/>} />
          <Route path="/products" element={<Catalog onImageClick={openModal} />} />
          {/* You can add other routes here */}
        </Routes>
      </HashRouter>
      {isModalOpen && <Cont open={isModalOpen} onClose={closeModal} product={selectedProduct} />}
    </div>
  );
}

export default App;
