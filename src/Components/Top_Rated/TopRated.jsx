import React from "react";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";
import './toprated.css'

const TopRated = () => {
  const toprated = useSelector((storeData) => {
    return storeData.toprated;
  });
  return (
    <>
      <div>
        <h2 className="topratedrHeading">
          Top Rated Movies
        </h2>

        <Card movies={toprated} />
      </div>
    </>
  );
};

export default TopRated;
