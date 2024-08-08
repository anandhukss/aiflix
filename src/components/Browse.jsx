import React from "react";
import { useUnauth } from "../hooks/useunauth";
import useNowPlayingList from "../hooks/useNowPlayingList";
import PrimaryContainer from "./VideoContainer/MainContainer/PrimaryContainer";

function Browse() {
  // useUnauth();

  useNowPlayingList();

  return (
    <div>
      <PrimaryContainer />
    </div>
  );
}

export default Browse;
