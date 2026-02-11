import { useRef } from 'react';

const SingleVideoPlayer = () => {
  const videoRef = useRef(null);

  const controls = {
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    forward: () => (videoRef.current.currentTime += 5),
    rewind: () => (videoRef.current.currentTime -= 5),
  };

  return (
    <div style={{ border: '2px solid #646cff', padding: '20px', borderRadius: '12px' }}>
      <h3>Mandatory: Single Video (useRef only)</h3>
      <video ref={videoRef} width="100%" style={{ maxWidth: '500px' }}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div style={{ marginTop: '10px' }}>
        <button onClick={controls.rewind}>⏪ -5s</button>
        <button onClick={controls.play}>▶️ Play</button>
        <button onClick={controls.pause}>⏸ Pause</button>
        <button onClick={controls.forward}>⏩ +5s</button>
      </div>
    </div>
  );
};

export default SingleVideoPlayer;