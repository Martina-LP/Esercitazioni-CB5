import './App.css';
import { useState } from 'react';
import { Banks } from './fetch/components/banks/Banks';
import { Beers } from './fetch/components/beers/Beers';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
import { CreditCards } from './fetch/components/credit-cards/CreditCards';

function ComponentSelector(props) {
  const {selectChangeHandler} = props;
  return (
    <form>
      <select defaultValue={''} onChange={selectChangeHandler}>
        <option disabled value="">Select a component</option>
        <option value="banks">Random bank</option>
        <option value="beers">Random beer</option>
        <option value="bloodTypes">Random blood type</option>
        <option value="creditCards">Random credit card</option>
      </select>
    </form>
  )
}

const defaultComponent = () => <div>Non hai selezionato alcun componente</div>;

const componentMap = {
  banks: Banks,
  beers: Beers,
  bloodTypes: BloodTypes,
  creditCards: CreditCards,
  default: defaultComponent
}

function App() {
  const [componentToRender, setComponentToRender] = useState('default');
  const selectChangeHandler = (event) => {
    // console.log({event});
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">

      <ComponentSelector selectChangeHandler = {selectChangeHandler} />

      {/* <form>
        <select defaultValue={''} onChange={selectChangeHandler}>
          <option disabled value="">Select a component</option>
          <option value="counter">Counter</option>
          <option value="bloodTypes">Random blood type</option>
        </select>
      </form> */}

      {/* <div>{componentToRender}</div> */}

      <DynamicComponent />

      {/* <Banks />
      <hr />
      <Beers />
      <hr />
      <BloodTypes />
      <hr />
      <CreditCards /> */}
    </div>
  );
}

export default App;
