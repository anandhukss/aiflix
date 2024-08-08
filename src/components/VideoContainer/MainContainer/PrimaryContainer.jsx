import React from "react";
import Description from "./Description";
import VideoBackground from "./VideoBackground";

function PrimaryContainer({primaryMovie}) {
  return (
    <div className="relative">
      <Description
        title={primaryMovie.original_title}
        description={primaryMovie.overview}
      />
      <VideoBackground movie_id={primaryMovie.id} />
    </div>
  );
}

export default PrimaryContainer;
