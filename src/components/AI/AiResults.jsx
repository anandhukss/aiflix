import React, { useEffect, useState } from "react";
import "./aiStyles.css";
import { useSelector } from "react-redux";
import MovieCard from "../VideoList/MovieCard";
import useMovieSearch from "../../hooks/useMovieSearch";
import Loader from "../../elements/Loader";

function AiResults({ results }) {
  const [movieData, setMovieData] = useState([]);
  const movieSearch = useSelector((store) => store.GPT.searchResults) || [];
  const { searchMovie, loadings } = useMovieSearch();

  useEffect(() => {
    results.map((el, index) => {
      setTimeout(() => {
        setMovieData((prev) => [...prev, { isActive: false, name: el }]);
      }, index * 200);
    });
  }, [results]);

  const setActiveMovie = (index) => {
    setMovieData((prev) =>
      prev.map((movie, i) => ({
        ...movie,
        isActive: i === index,
      }))
    );

    searchMovie(movieData[index].name);
  };

  return (
    <>
      <div className="grid grid-cols-5 space-x-6 p-6 sm:flex sm:flex-col ">
        {movieData.map((movie, i) => {
          return (
            <div
              onClick={() => setActiveMovie(i)}
              key={movie.name}
              className={`sm:mt-4  p-3 text-center cursor-pointer active:bg-red-600 active:text-white  shadow rounded-lg fade-in-top ${
                movie.isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-primary-bg hover:bg-gray-600 hover:text-white"
              }`}
            >
              {movie.name}
            </div>
          );
        })}
      </div>

      <Loader loading={loadings}>
        {!loadings && (
          <div className="mt-10 grid grid-cols-5 gap-8 p-6 sm:grid-cols-1">
            {movieSearch.map((el) => {
              return <MovieCard key={el.id} movie={el} />;
            })}
          </div>
        )}
      </Loader>
    </>
  );
}

export default AiResults;
