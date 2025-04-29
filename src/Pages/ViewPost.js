import React, { useEffect } from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'

function ViewPost(props) {
   const getProducts=()=>{ fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
   }
  
   useEffect(()=>{
    getProducts()
   })
    return (
        <div>
            <Header />
            <View/>
        </div>
    )
}

export default ViewPost
