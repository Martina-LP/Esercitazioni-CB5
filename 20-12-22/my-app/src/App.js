import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Good evening, I'm using React!</h1>
        <Button />
      </header>
    </div>
  );
}

export default App;
