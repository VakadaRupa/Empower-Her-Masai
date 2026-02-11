import React from 'react';

/**
 * Component 6: Final Destination for prop 'e'
 */
const Component6 = ({ e }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <h4>Component 6</h4>
      <h4>This is prop e: {e}</h4>
    </div>
  );
};

/**
 * Component 5: Displays 'f', forwards 'e'
 * Observation: Component 5 doesn't use 'e', but must handle it.
 */
const Component5 = ({ e, f }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <h4>Component 5</h4>
      <h4>This is prop f: {f}</h4>
      <Component6 e={e} />
    </div>
  );
};

/**
 * Component 4: Displays 'c' and 'd', forwards 'e' and 'f'
 */
const Component4 = ({ c, d, e, f }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <h4>Component 4</h4>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 e={e} f={f} />
    </div>
  );
};

/**
 * Component 3: Displays 'a' and 'b', forwards 'c', 'd', 'e', 'f'
 */
const Component3 = ({ a, b, c, d, e, f }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <h4>Component 3</h4>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
};

/**
 * Component 2: THE PASS-THROUGH
 * Observation: This component uses NOTHING but must pass EVERYTHING.
 */
const Component2 = (props) => {
  return (
    <div style={{ border: '1px dashed red', padding: '10px', margin: '5px' }}>
      <h4>Component 2 (Pass-through Only)</h4>
      <Component3 {...props} />
    </div>
  );
};

/**
 * Component 1: The Source
 */
const Component1 = () => {
  const data = {
    a: "Apple",
    b: "Banana",
    c: "Cherry",
    d: "Dragonfruit",
    e: "Elderberry",
    f: "Fig"
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Prop Drilling Lab</h1>
      <Component2 
        a={data.a} 
        b={data.b} 
        c={data.c} 
        d={data.d} 
        e={data.e} 
        f={data.f} 
      />
    </div>
  );
};

export default Component1;