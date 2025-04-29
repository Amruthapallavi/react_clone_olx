import React, { useContext } from 'react';

import './View.css';
import { ProductContext } from '../../store/ProductContext';
function View() {
  const {selectedProduct} = useContext(ProductContext)
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={selectedProduct.image} alt={selectedProduct.title} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {selectedProduct.price}</p>
          <span>{selectedProduct.title}</span>
          <p>{selectedProduct.category}</p>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
}
export default View;