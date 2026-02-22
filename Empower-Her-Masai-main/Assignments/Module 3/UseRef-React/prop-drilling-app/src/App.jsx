import Component1 from './components/PropDrilling';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#61dafb' }}>React Mastery: Prop Drilling Lab</h1>
        <p>Observe how data flows through the hierarchy below.</p>
      </header>
      
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Component1 />
      </main>
    </div>
  );
}

export default App;