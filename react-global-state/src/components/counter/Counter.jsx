import { useReducer } from 'react';
import styles from './index.module.scss';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  };
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={() => dispatch({type: 'decrement'})}>-</button>
      {state.count}
      <button className={styles.btn} onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
};

export default Counter;
