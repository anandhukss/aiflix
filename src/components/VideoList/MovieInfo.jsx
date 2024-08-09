import React from "react";

function MovieInfo({ closeDialog, movie }) {
  return (
    <div>
      <div className="w-full rounded-md p-4 bg-white h-1/2">
        <div className="flex justify-end">
          <button className="cursor-pointer" onClick={closeDialog}>
            <i className="fa fa-close" aria-hidden="true"></i>
          </button>
        </div>
        <div className="mt-4 ">
          <div className="font-semibold">{movie.original_title}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
