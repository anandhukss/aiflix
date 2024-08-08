import React, { useEffect } from "react";
import { CORE_URL, API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setVideoList } from "../store/moviesSlice";

function useMainVideo(movie_id) {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `${CORE_URL}/${movie_id}/videos`;
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(setVideoList(json.results)))
      .catch((err) => console.error("error:" + err));
  }, []);

  return <div>useMainVideo</div>;
}

export default useMainVideo;
