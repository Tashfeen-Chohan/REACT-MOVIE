import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api_url } from "./Context";

function SingleMovie() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // The debounce() function forces a function to wait a certain amount of time before running again. This functin is built to limit the number of times a function is called.

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovie(`${api_url}&i=${id}`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className="card-text"><b>Release Date :</b> {movie.Released}</p>
            <p className="card-text"><b>Genre : </b>{movie.Genre}</p>
            <p className="card-text"><b>Rating : </b>{movie.imdbRating}</p>
            <p className="card-text"><b>Country : </b>{movie.Country}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleMovie;
