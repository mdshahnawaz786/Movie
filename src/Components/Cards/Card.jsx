import React from "react";
import { Link } from "react-router-dom";
import './card.css'


const Card = ({ movies }) => {
  // console.log(movies);
  return (
    <>
      <div className="mainCardContainer">
        {movies ? (
          <>
            {movies.map((ele) => {
              return (
                <>
                  <Link to={`/moviedetails/${ele.id}`} >
                    <div className="card">
                      <img
                        className="cardImg"
                        src={`https://image.tmdb.org/t/p/original/${
                          ele && ele.poster_path
                        }`}
                        alt=""
                      />
                      <div className="cardOverlay">
                        <div className="card_Title">
                          {ele && ele.original_title}
                        </div>
                        <div className="posterImageReleasingDateRating">
                          {ele && ele.release_date}
                          <span>{ele && ele.vote_average}{" "} <i className="imdbicon fa-brands fa-imdb"></i></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </>
  );
};

export default Card;
