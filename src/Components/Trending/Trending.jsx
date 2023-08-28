import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";

const Trending = () => {
  const trending = useSelector((storeData) => {
    return storeData.trending;
  });
  return (
    <>
      <div>
      <h2 style={{fontSize:"3rem", fontWeight:"700", color:"rgb(113, 188, 242)",textAlign:"center"}}>Trending Movies</h2>

        <Card movies={trending} />
      </div>
    </>
  );
};

export default Trending;
