import React,{useEffect, useState} from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import ProductProvider from '../store/ProductContext';

function Home(props) {
  const [prod,setProd]= useState([])

  const getProducts=()=>{ fetch('https://fakestoreapi.com/products/1')
      .then(res=>res.json())
      .then(json=>setProd(json))
     }
  
     useEffect(()=>{
      getProducts()
     })
  return (
    <div className="homeParentDiv">
      <ProductProvider>
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </ProductProvider>
      
    </div>
  );
}

export default Home;
 
