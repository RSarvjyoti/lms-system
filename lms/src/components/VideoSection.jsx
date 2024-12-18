import React, { useRef, useEffect } from "react";

const VideoSection = ({ videoUrl, onVideoEnd }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleVideoEnd = () => {
      if (onVideoEnd) onVideoEnd();
    };

    iframe.addEventListener("onStateChange", (event) => {
      if (event.data === 0) {
        // Video ends
        handleVideoEnd();
      }
    });

    return () => {
      iframe.removeEventListener("onStateChange", handleVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <div className="video-section mx-auto mb-8 max-w-4xl rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <iframe
        ref={iframeRef}
        className="w-full h-64 md:h-96"
        src={videoUrl + "?rel=0&showinfo=0&autohide=1&controls=0"}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
