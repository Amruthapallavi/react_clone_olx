import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

function ProductProvider ({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider