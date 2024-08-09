import React from "react";
import { IMG_URL } from "../../constants/api";
import useDialog from "../../hooks/useDialog";
import MovieInfo from "./MovieInfo";

function MovieCard({ movie }) {
  const { backdrop_path } = movie;

  const { openDialog, closeDialog, Dialog } = useDialog();

  return (
    <>
      <div
        onClick={openDialog}
        className="bg-white shadow-lg rounded-lg p-4 m-2 cursor-pointer transition ease-in-out delay-150 
        hover:-translate-y-1  hover:bg-transparent  hover:scale-125
        duration-300 relative"
      >
        <img
          className="w-60 h-52 rounded-md hover:w-64 hover:h-56"
          src={`${IMG_URL}${backdrop_path}`}
          alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <i className="fa-solid fa-circle-info text-white fa-2xl"></i>
        </div>
      </div>

      <Dialog>
        <MovieInfo closeDialog={closeDialog} movie={movie} />
      </Dialog>
    </>
  );
}

export default MovieCard;
