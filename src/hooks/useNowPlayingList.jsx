import React, { useEffect } from "react";
import { CORE_URL, API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setNowPlayingList } from "../store/moviesSlice";

function useNowPlayingList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `${CORE_URL}/now_playing?language=en-US&page=1`;
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setNowPlayingList(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);
}

export default useNowPlayingList;
