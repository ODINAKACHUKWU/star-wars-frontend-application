import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-light mr-2" role="status"></div>
      <div className="spinner-grow text-light mr-2" role="status"></div>
      <div className="spinner-grow text-light" role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
