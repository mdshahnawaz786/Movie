import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import "./slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const all = useSelector((storeData) => {
    return storeData.all;
  });
  return (
    <div className="carousel">
      <Carousel data-bs-theme="dark" interval={5000}>
        {all &&
          all.map((ele) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/original/${
                    ele && ele.backdrop_path
                  }`}
                  alt="First slide"
                />
                <Link to={`/moviedetails/${ele.id}`}>
                  <div className="caption">
                    <Carousel.Caption>
                      <div className="carouselHolder">
                        <h1 className="carouselTitle">{ele.original_title}</h1>
                        <div id="movieDiscription">
                          <h4 className="carouselReleaseDate">
                            {ele.release_date}
                          </h4>
                          <h4 id="carouselVote">
                            {ele.vote_average}{" "}
                            <i className="imdbicon fa-brands fa-imdb"></i>
                          </h4>
                        </div>
                        <span className="overviewCarousel">{ele.overview}</span>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Link>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Slider;
