import { useEffect } from "react";
import { CORE_URL, API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setNowPlayingList } from "../store/moviesSlice";
import { useSelector } from "react-redux";

function useNowPlayingList() {
  const dispatch = useDispatch();

  const dataAvailable = useSelector((store) => store.movies?.nowPlayingList);

  useEffect(() => {
    if (dataAvailable) return;

    const url = `${CORE_URL}/now_playing?language=en-US&page=1`;
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setNowPlayingList(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);


  return dataAvailable
}

export default useNowPlayingList;
