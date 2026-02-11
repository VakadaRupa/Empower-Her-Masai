import React, { createContext, useContext } from 'react';

// 1. Create the Context
const AppContext = createContext();

const App = () => {
  return <Component1 />;
};

const Component1 = () => {
  // Define values once inside the provider
  const values = {
    a: "Apple",
    b: "Banana",
    c: "Cherry",
    d: "Date",
    e: "Elderberry",
    f: "Fig"
  };

  return (
    <AppContext.Provider value={values}>
      <h1>Component 1 (Provider)</h1>
      <Component2 />
    </AppContext.Provider>
  );
};

// Component 2 is now a "clean" middleman. 
// It doesn't receive or pass any props.
const Component2 = () => {
  return (
    <div>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  const { a, b } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 />
    </div>
  );
};

const Component4 = () => {
  const { c, d } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 />
    </div>
  );
};

const Component5 = () => {
  const { f } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </div>
  );
};

const Component6 = () => {
  const { e } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop e: {e}</h4>
    </div>
  );
};

export default App;