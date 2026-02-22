import { useState, useRef } from 'react';

const MultiVideoPlayer = () => {
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div style={{ border: '2px solid #42b883', padding: '20px', borderRadius: '12px', marginTop: '20px' }}>
      <h3>Optional: Multi-Video (State + useRef)</h3>
      <video ref={videoRef} key={videos[currentIndex]} width="100%" style={{ maxWidth: '500px' }}>
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>
      <div style={{ marginTop: '10px' }}>
        <button onClick={prevVideo}>⏮ Prev</button>
        <button onClick={() => (videoRef.current.currentTime -= 5)}>⏪</button>
        <button onClick={() => videoRef.current.play()}>▶️</button>
        <button onClick={() => videoRef.current.pause()}>⏸</button>
        <button onClick={() => (videoRef.current.currentTime += 5)}>⏩</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
};

export default MultiVideoPlayer;