import React, { useEffect } from "react";
import { CORE_URL, API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setVideoList } from "../store/moviesSlice";
import { useSelector } from "react-redux";

function useMainVideo(movie_id) {
  const dispatch = useDispatch();
  const dataAvailable = useSelector((store) => store.movies?.videoList);

  useEffect(() => {
    if (dataAvailable) return;
    const url = `${CORE_URL}/${movie_id}/videos`;
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(setVideoList(json.results)))
      .catch((err) => console.error("error:" + err));
  }, []);

  return dataAvailable;
}

export default useMainVideo;
