import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website is under development, please check back later.
        </p>
        <a
          className="App-link"
          href="https://twitter.com/DracoRicky"
          target = "_blank"
          rel="noopener noreferrer"
        >
          Being developed by Ricky.
        </a>
      </header>
    </div>
  );
}

export default App;
