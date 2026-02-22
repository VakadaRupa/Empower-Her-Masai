import { useState, Suspense, lazy } from "react";

// Lazy loading (Vite supports this out of the box)
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vite + React.memo + Lazy Loading</h2>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
