import React,{ memo } from "react";
import Description from "./Description";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const PrimaryContainer = memo(function PrimaryContainer() {
  const primaryMovie = useSelector((store) => store.movies?.nowPlayingList?.[0]);

  if (!primaryMovie) return null;

  return (
    <div className="relative">
      <Description
        title={primaryMovie.original_title}
        description={primaryMovie.overview}
      />
      <VideoBackground movie_id={primaryMovie.id} />
    </div>
  );
});

export default PrimaryContainer;
