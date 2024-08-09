import React, { useEffect } from "react";
import { createPortal } from "react-dom";

// Get the modal root element from the document

const Portal = ({ children }) => {
  // Create a new div element for the modal content
  const el = document.createElement("div");

  useEffect(() => {
    // Append the modal div to the modal root when the component mounts
    document.body.appendChild(el);

    // Remove the modal div from the modal root when the component unmounts
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  const myStyle = {
    zIndex: 10000,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return createPortal(
    <div
      style={myStyle}
      className="w-full h-screen fixed flex items-center justify-center inset-0"
    >
      <div className="modal-content">{children}</div>
    </div>,
    el
  );
};

export default Portal;
