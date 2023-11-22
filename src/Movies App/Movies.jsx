import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

function Movies() {
  const { movie, isError } = useGlobalContext();

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col container">
          {movie.map((val) => {
            const { Title, Poster, imdbID } = val;
            const movieName = Title.substring(0,20)
            return (
               <NavLink key={imdbID} to={`movie/${imdbID}`}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieName.length >= 20 ? `${movieName}...` : movieName }</h2>
                    <img src={Poster} alt="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Movies;
