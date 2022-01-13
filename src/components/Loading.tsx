import React from "react";

const Loading = () => {
  return (
    <div className="loader-container">
      <p className="sr-only" role="alert" aria-busy="true">
        Loading
      </p>
      <div className="loader" />
    </div>
  );
};

export default Loading;
