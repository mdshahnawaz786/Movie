import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import './trending.css'

const Trending = () => {
  const trending = useSelector((storeData) => {
    return storeData.trending;
  });
  return (
    <>
      <div>
        <h2 className="trendingHeading">
          Trending Movies
        </h2>

        <Card movies={trending} />
      </div>
    </>
  );
};

export default Trending;
