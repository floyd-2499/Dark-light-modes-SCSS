import { useState } from 'react';
import logo from '../logo.svg';
import './app.scss';
import './Styles/Variables.scss'

function App() {
  const [mode, setMode] = useState("light")
  return (
    <div className={`App ${mode}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click to change Mode
        </p>
          <button className='switch' onClick={() =>  setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "Dark Mode": "Light Mode"}
          </button>
      </header>
    </div>
  );
}

export default App;
