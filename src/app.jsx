import React, { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.body.scrollHeight - window.innerHeight;

      const progress = scrollTop / maxScroll;

      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      {}
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          src="/techtonics.mp4"
          muted
          playsInline
          preload="auto"
        />
      </section>

      
      <section className="scroll-space" />

     
      <section className="content">
        <h2>Who We Are</h2>
        <p>
          Tech Tonics is a group of builders, designers, and hackers
          who meet at hackathons to ship fast and learn faster.
        </p>

        <ul>
          <li>Hackathons & competitions</li>
          <li>Product experiments</li>
          <li>Open-source projects</li>
          <li>College tech events</li>
        </ul>
      </section>
    </main>
  );
}
