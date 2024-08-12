import React, { useEffect, useState } from "react";
import "./aiStyles.css";

function AiResults({ results }) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    results.map((el, index) => {
      setTimeout(() => {
        setMovieData((prev) => [...prev, { isActive: false, name: el }]);
      }, index * 200);
    });
  }, [results]);

  return (
    <div className="grid grid-cols-5 space-x-6 p-6 ">
      {movieData.map((movie, i) => {
        return (
          <div
            key={movie.name}
            className="p-3  text-center cursor-pointer bg-white shadow rounded-lg text-primary-bg hover:bg-gray-600 hover:text-white fade-in-top"
          >
            {movie.name}
          </div>
        );
      })}
    </div>
  );
}

export default AiResults;
