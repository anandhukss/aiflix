import React from "react";
import { IMG_URL } from "../../constants/api";

function MovieCard({ img_id }) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 m-2">
        <img
          className="w-60 h-52 rounded-md"
          src={`${IMG_URL}${img_id}`}
          alt=""
        />
      </div>
    </>
  );
}

export default MovieCard;
