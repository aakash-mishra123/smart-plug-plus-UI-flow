import logo from './logo.svg';
import './App.css';
import SlidingCards from './shared/SlidingCards/SlidingCards';
import DropdownMenu from './shared/DropdownMenu/DropdownMenu';
import Navbar from './shared/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header> */}
      <Navbar />
      <SlidingCards />

    </div>
  );
}

export default App;
