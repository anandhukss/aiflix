import React from "react";
import { useUnauth } from "../hooks/useunauth";
import useNowPlayingList from "../hooks/useNowPlayingList";
import PrimaryContainer from "./MainContainer/PrimaryContainer";
import MovieList from "./VideoList/MovieList";
import { useSelector } from "react-redux";
import usePopularList from "../hooks/usePopular";
import AiRecommendation from "./AI/AiRecomendation";

function Browse() {
  // useUnauth();

  const isAiEnabled = useSelector((store) => store.GPT.aiRecommendation);

  useNowPlayingList();
  usePopularList();

  const primaryList = useSelector((store) => store.movies?.nowPlayingList);
  const popularList = useSelector((store) => store.movies?.popularList);

  if (!primaryList) return null;
  if (!popularList) return null;

  return !isAiEnabled ? (
    <>
      <PrimaryContainer primaryMovie={primaryList[0]} />
      <div className="absolute -mt-40 z-30">
        <MovieList movieList={primaryList} title={"Now Playing"} />
        <MovieList movieList={popularList} title={"Trending"} />
      </div>
    </>
  ) : (
    <AiRecommendation />
  );
}

export default Browse;
