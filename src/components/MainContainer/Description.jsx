import React from "react";

function Description({ title, description }) {
  return (
    <div className="w-full aspect-video absolute pt-[20%] pl-10 z-20 text-white bg-gradient-to-r from-black sm:relative sm:pl-8">
      <div className="font-bold  text-6xl sm:text-2xl">{title}</div>
      <div className="text-white mt-8 max-w-96 sm:text-xs">{description}</div>
    </div>
  );
}

export default Description;
