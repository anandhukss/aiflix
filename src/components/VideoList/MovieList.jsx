import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movieList, title }) {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });
      checkScrollPosition();
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });
      checkScrollPosition();
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  return (
    <div className="m-6 relative">
      <div className="text-white mb-4 text-2xl">{title}</div>
      <div className="flex items-center">
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none hover:bg-gray-700"
          >
            &larr;
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide group"
        >
          {movieList.map((x) => (
            <div key={x.id} className="flex-shrink-0 ">
              <MovieCard movie={x} />
            </div>
          ))}
        </div>
        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none hover:bg-gray-700"
          >
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieList;
