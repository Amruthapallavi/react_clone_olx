import React, { useContext, useState } from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
// import { UserContex } from '../../store/UserContext';
function Banner() {
  // const [name,setName] =useState(null)
  // const {setUser}= useContext(UserContex)
  // const handleInput=()=>{
  //      if(name){
  //       setUser({name:name})
  //      }else{
  //       setUser({name:'unknown'})
  //      }
  // }
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
          {/* <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <button onClick={handleInput}>submit</button> */}
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
