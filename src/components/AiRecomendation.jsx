import React, { useState } from "react";
import Loader from "../elements/Loader";

function AiRecommendation() {
  const [loadings, setLoadings] = useState(false);

  return (
    <div className="pt-[10%]">
      <div className="w-full">
        <div className="flex mx-auto max-w-2xl">
          <input
            type="text"
            placeholder="Looking for something to watch? Tell me your mood or favorite genre!"
            className="w-full px-4 py-2  rounded-l-md focus:outline-none focus:ring-0"
          />

          <Loader loading={loadings}>
            <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-600  focus:outline-none">
              Ask
            </button>
          </Loader>
        </div>
      </div>
    </div>
  );
}

export default AiRecommendation;
