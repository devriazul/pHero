import React from "react";

const Loading = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-center  text-secondary text-xl">Loading...</h1>
      <progress className="progress w-56 progress-secondary"></progress>
    </div>
  );
};

export default Loading;
