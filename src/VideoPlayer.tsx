import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface VideoLibrary {
  [module: string]: {
    [topic: string]: string;
  };
}

const videoLibrary: VideoLibrary = {
  "new-hired-training": {
    "lg-history":"http://10.102.60.95/lgapptest/video/lg-history.mp4",
    "department-overview":"http://10.102.60.95/lgapptest/video/5GSFSIntroductionc.mp4",
    "cs-intro":"http://10.102.60.95/lgapptest/video/7CNPRegistration.mp4",
    "cic-intro":"http://10.102.60.95/lgapptest/video/8CallRegistrationExistingCustomer.mp4",
  },
};

const VideoPlayer: React.FC = () => {
  const { module, topic } = useParams<{ module: string; topic: string }>();
  const navigate = useNavigate();

  const videoUrl =
    module && topic ? videoLibrary[module]?.[topic] : undefined;

  return (
    <div className="video-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} /> Back
      </button>

      {videoUrl ? (
        <video controls autoPlay width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video not available.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
