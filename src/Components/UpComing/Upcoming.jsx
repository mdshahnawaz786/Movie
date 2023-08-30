import React from "react";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";
import './upcoming.css'

const Upcoming = () => {
  const upcoming = useSelector((storeData) => {
    return storeData.upcoming;
  });
  return (
    <>
      <div>
        <h2 className="upcomingHeading">
          Upcoming Movies
        </h2>

        <Card movies={upcoming} />
      </div>
    </>
  );
};

export default Upcoming;
