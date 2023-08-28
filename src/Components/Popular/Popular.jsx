import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";


const Popular = () => {
  const popular = useSelector((storeData)=>{
    return storeData.popular
  })
  
  return (
    <>
      <div> 
      <h2 style={{fontSize:"3rem", fontWeight:"700", color:"rgb(113, 188, 242)",textAlign:"center"}}>Popular Movies</h2>

        <Card movies={popular}/>
      </div>
    </>
  );
};

export default Popular;
