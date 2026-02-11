import FirstComponent from "./FirstComponent";
import '../src/App.css';
function App(){
return(
  <div className="App">
    <h1>Hello React World!</h1>
    <FirstComponent/>
    <p>The comment is rendered above this line.</p>
  </div>
);
}

export default App;