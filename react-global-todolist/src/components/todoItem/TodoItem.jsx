import { useContext } from 'react';
import { ApplicationContext } from '../../store/state';
import styles from './index.module.scss';

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(ApplicationContext);

  const onHandleClick = (e) => {
    dispatch({
      type: "REMOVE_TODO_FROM_LIST",
      payload: data.id,
    });
  };

  return (
    <div
      className={`${styles.TodoItem} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default TodoItem;
