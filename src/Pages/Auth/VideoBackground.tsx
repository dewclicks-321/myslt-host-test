// components/VideoBackground.tsx
import React from 'react';
import './VideoBackground.css';
import backgroundVideo from '../assets/background.mp4';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="overlay"></div> */}
    </div>
  );
};

export default VideoBackground;
