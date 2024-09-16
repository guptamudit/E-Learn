import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <div className="border rounded-lg p-2">
        {" "}
        <h2 className="text-gray-400 mb-3">Course Preview</h2>
        <iframe src={videoUrl} height="250" width="500"></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
