const VideoPlayer = () => {
    return (
      <div className="video-container">
        <video controls width="600">
          <source src="/https://youtu.be/dcn06HtD0XM?si=xsyS2zvzv2n4R_0U"></source>
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;