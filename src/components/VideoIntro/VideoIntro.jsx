import React, { useEffect } from "react";
import "./VideoIntro.css";

const VideoIntro = () => {
  const attemptPlay = () => {
    let _video = document.getElementById("video-intro");
    _video.muted = false;
    document.body.click();
    if (_video.paused) {
      _video.volume = 0.2;
      _video.play();
      setTimeout(function () {
        _video.play();
      }, 5000);
    }
  };

  const goToPlanElement = () => {
    const element = document.getElementById("plans-box");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      attemptPlay();
    }
  }, []);

  return (
    <section className="video-intro wrapper">
      <div className="video-intro-container">
        <video id="video-intro" src="./video.mp4" loop controls></video>
        <div className="button" onClick={goToPlanElement}>
          <div>I WANT WOO-PONS</div>
          <div>( GET 30 DAYS FREE )</div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
