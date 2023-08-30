import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import "./search.css";

const Search = () => {
  const search = useSelector((storeData) => {
    return storeData.search;
  });
  return (
    <div className="searchBox">
      {search.length > 0 ? (
        <Card movies={search} />
      ) : (
        <>
          <h3 className="searchError">No Result Found</h3>
        </>
      )}
    </div>
  );
};

export default Search;
