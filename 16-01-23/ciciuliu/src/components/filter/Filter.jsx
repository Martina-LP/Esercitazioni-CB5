import { useState } from 'react';
import './index.css';

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState('');

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div className="Filter">
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Search..."
        />
        <input className="Sub" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Filter;
