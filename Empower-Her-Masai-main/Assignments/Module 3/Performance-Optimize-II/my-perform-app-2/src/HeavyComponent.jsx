import React from "react";

const HeavyComponent = () => {
  console.log("🔥 HeavyComponent rendered");

  // Simulate heavy computation
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
  }

  return (
    <div style={{ padding: "20px", background: "#eee", marginTop: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This is an expensive UI block.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
