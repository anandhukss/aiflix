import { useEffect } from "react";
import { CORE_URL, API_OPTIONS } from "../constants/api";
import { useDispatch } from "react-redux";
import { setPopularList } from "../store/moviesSlice";

function usePopularList() {
    const dispatch = useDispatch();

    useEffect(() => {
        const url = `${CORE_URL}/popular?language=en-US&page=1`;
        fetch(url, API_OPTIONS)
            .then((res) => res.json())
            .then((json) => {
                dispatch(setPopularList(json.results));
            })
            .catch((err) => console.error("error:" + err));
    }, []);
}

export default usePopularList;
