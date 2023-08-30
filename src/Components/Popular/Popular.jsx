import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import './popular.css'

const Popular = () => {
  const popular = useSelector((storeData) => {
    return storeData.popular;
  });

  return (
    <>
      <div>
        <h2 className="popularHeading">
          Popular Movies
        </h2>
        <Card movies={popular} />
      </div>
    </>
  );
};

export default Popular;
