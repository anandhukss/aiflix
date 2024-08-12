import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../store/aiSlice";

function useMovieSearch() {
  const dispatch = useDispatch();
  const [loadings, setLoadings] = useState(false);

  const searchMovie = (input) => {
    setLoadings(true);

    const url = `
    https://api.themoviedb.org/3/search/movie?query=${input}`;

    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(setSearchResults(json.results)))
      .catch((err) => console.error("error:" + err))
      .finally(() => setLoadings(false));
  };
  return { searchMovie, loadings };
}

export default useMovieSearch;
