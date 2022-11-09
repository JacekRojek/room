import "./App.css";
import MainCanvas from "./MainCanvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MainCanvas />
      </header>
    </div>
  );
}

export default App;
