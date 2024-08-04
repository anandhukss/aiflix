import React from "react";

function Loader({ loading, children }) {
  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="absolute h-full w-full flex justify-center items-center bg-black opacity-90 inset-0">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
}

export default Loader;
