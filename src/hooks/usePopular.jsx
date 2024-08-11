import { useEffect } from "react";
import { CORE_URL, API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setPopularList } from "../store/moviesSlice";
import { useSelector } from "react-redux";

function usePopularList() {
  const dispatch = useDispatch();

  const dataAvailable = useSelector((store) => store.movies?.popularList);

  useEffect(() => {
    if (dataAvailable) return;
    const url = `${CORE_URL}/popular?language=en-US&page=1`;
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPopularList(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return dataAvailable;
}

export default usePopularList;
