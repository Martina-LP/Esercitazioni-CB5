import './App.css';
import { Banks } from './fetch/components/banks/Banks';
import { Beers } from './fetch/components/beers/Beers';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
import { CreditCards } from './fetch/components/credit-cards/CreditCards';

function App() {
  return (
    <div className="App">
      <Banks />
      <hr />
      <Beers />
      <hr />
      <BloodTypes />
      <hr />
      <CreditCards />
    </div>
  );
}

export default App;
