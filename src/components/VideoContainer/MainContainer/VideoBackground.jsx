import React,{useMemo} from "react";
import useMainVideo from "../../../hooks/useMainVideo";
import { useSelector } from "react-redux";

function VideoBackground({ movie_id }) {
  useMainVideo(movie_id);

  const videoList = useSelector((store) => store?.movies?.videoList);
  
  const mainVideo = useMemo(() => {
    if (!videoList) return null;
    return videoList.find((el) => el.type === "Trailer") || videoList[0];
  }, [videoList]);

  if (!mainVideo) return null;


  return (
    <div>
      {" "}
      <iframe
        className="w-full aspect-video relative"
        src={`https://www.youtube.com/embed/${mainVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
