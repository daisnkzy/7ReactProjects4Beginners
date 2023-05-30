import React from 'react';

const Video = ({ videoSrc }) => {
  return (
    <div>
      <video src={videoSrc} controls autoPlay />
    </div>
  );
};

export default Video;
