import React from "react";
import { useUnauth } from "../hooks/useunauth";

function Browse() {
  useUnauth();

  return <div>Browse</div>;
}

export default Browse;
