import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { credits, idMoviesApi, trailer } from "../Functions/Functions";
import "./details.css";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const [videoDiv, setVideodiv] = useState(false);
  const cast = useSelector((storeData) => {
    return storeData.cast;
  });

  const key = useSelector((storeData) => {
    return storeData.videokey;
  });
  useEffect(() => {
    idMoviesApi(id, setState);
    credits(id, dispatch);
    trailer(id, dispatch);
  }, []);

  return (
    <>
      <div className="moviedetail">
        {state.length !== 0 && (
          <>
            <div className="moviePoster">
              <img
                className="moviedetailImage"
                src={`https://image.tmdb.org/t/p/original/${
                  state && state.backdrop_path
                }`}
                alt=""
              />

              <div className="innermoviePoster">
                <h2 className="movieTitle">{state && state.title}</h2>
                <button
                  onClick={() => {
                    setVideodiv(true);
                  }}
                  className="trailer"
                >
                  <i className="fa-solid fa-play"></i> Watch Trailer
                </button>
              </div>
            </div>

            <div className="finalTrial">
              <div className="trial">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    state && state.poster_path
                  }`}
                />
              </div>

              <div className="movieFullDetails">
                <p>
                  Status:{" "}
                  <span>
                    {" "}
                    {state && state.status}{" "}
                    {state.status === "Released" ? (
                      <i class="cross fa-solid fa-circle-check"></i>
                    ) : (
                      <i class=" fa-sharp fa-regular fa-circle-xmark"></i>
                    )}
                  </span>
                </p>
                <p>
                  Release Date: <span> {state && state.release_date}</span>{" "}
                </p>
                <p>
                  Duration:{" "}
                  <span>
                    {" "}
                    {state && state.runtime} min{" "}
                    <i class="clock fa-solid fa-clock"></i>
                  </span>
                </p>

                <p className="languages">
                  Languages:
                  {state.length !== 0 &&
                    state.spoken_languages.map((ele) => {
                      return <> {<span>{`${ele.english_name} `}</span>}</>;
                        
                    })}
                </p>
                <p className="languages">
                  Genres:
                  {state &&
                    state.genres.map((ele) => {
                      // return <> {<span>{`${ele.name} `}</span>}</>;
                      return <> &nbsp;
                        <button className="genresButton"><span>{ele.name}</span></button>&nbsp;
                      </>;
                    })}
                </p>

                <p>
                  Rating: <span> {state && state.vote_average.toFixed(1)}</span>{" "}
                  <i className="rating fa-brands fa-imdb"></i>
                </p>
                <p>
                  Description: <span> {state && state.overview}</span>
                </p>
              </div>
            </div>

            <div className="castDetails">
              {cast &&
                cast.map((cast) => {
                  return (
                    <div className="cast">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          cast && cast.profile_path
                        }`}
                        alt="loading"
                      />
                      <p className="one">{cast.original_name}</p>
                      <p className="two">{cast.character}</p>
                      <p className="three">
                        {cast.gender === 1 ? "Female" : "Male"}
                      </p>
                    </div>
                  );
                })}
            </div>

            <div
              style={{ display: videoDiv === true ? "flex" : "none" }}
              className="videoContainer"
            >
              <div className="upperContainer">
                <button
                  onClick={() => {
                    setVideodiv(false);
                  }}
                >
                  <i className="cross fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="youtubeContainer">
                <div className="youtube">
                  {key ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${key}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <h1>Data Not Found</h1>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
