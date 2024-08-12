import React, { useRef } from "react";
import Loader from "../../elements/Loader";
import useGpt from "../../hooks/useGpt";
import { useSelector } from "react-redux";
import AiResults from "./AiResults";

function AiRecommendation() {
  const { getData, loadings } = useGpt();
  const searchRef = useRef(null);

  const fetchData = () => {
    getData(searchRef.current.value);
  };

  const movieData = useSelector((store) => store.GPT.aiMessage);
  const aiError = useSelector((store) => store.GPT.aiError);
  const test = ["array 1", "array 2", "array 3", "array 4", "array 5"];

  return (
    <div className="pt-[10%]">
      <div className="w-full">
        <div className="flex mx-auto max-w-2xl">
          <input
            ref={searchRef}
            type="text"
            placeholder="Looking for something to watch? Tell me your mood or favorite genre!"
            className="w-full px-4 py-2  rounded-l-md focus:outline-none focus:ring-0"
          />

          <Loader loading={loadings}>
            <button
              onClick={fetchData}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-600  focus:outline-none"
            >
              Ask
            </button>
          </Loader>
        </div>
      </div>

      {/* <AiResults results={test} /> */}

      {!loadings && (
        <div className="mt-10">
          {aiError && (
            <div className="text-red-600 text-center"> {aiError} </div>
          )}
          {movieData?.length && (
            <div>
              <AiResults results={movieData} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AiRecommendation;
