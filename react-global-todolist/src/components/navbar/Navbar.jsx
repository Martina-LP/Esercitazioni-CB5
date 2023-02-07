import { useState, useContext } from 'react';
import { ApplicationContext } from '../../store/state';
import styles from './index.module.scss';

function Navbar() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(ApplicationContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO_TO_LIST",
      payload: {
        id: Math.floor(Math.random() * 100000),
        content: input,
        status: false,
      },
    });
    setInput(() => "");
  };

  return (
    <div className={styles.Navbar}>
      <h1>Things to do today :</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(() => e.target.value)}
          placeholder="Add a task here..."
        />
      </form>
    </div>
  );
};

export default Navbar;
