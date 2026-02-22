import SingleVideoPlayer from './components/SingleVideoPlayer';
import MultiVideoPlayer from './components/MultiVideoPlayer';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Vite + React Video Player</h1>
      <SingleVideoPlayer />
      <MultiVideoPlayer />
    </div>
  );
}

export default App;