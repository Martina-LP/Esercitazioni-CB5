import "./App.css";
import { Lottery } from "./components/Lottery/Lottery";
import { NewUser } from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Lottery />
      <NewUser />
    </div>
  );
};

export default App;
