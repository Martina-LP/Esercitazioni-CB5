import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClose = () => {
    dispatch({ type: "ON_DELETE_NOTE", payload: data.id });
  };

  const onHandleEdit = () => {
    dispatch({ type: "ON_SET_CURRENT_EDIT_NOTE", payload: data.id });
    dispatch({ type: "ON_HANDLE_MODAL" });
  };

  return (
    <div className={styles.NoteItem}>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <button className={styles.btnClose} onClick={onHandleClose}>
        X
      </button>
      <button className={styles.btnEdit} onClick={onHandleEdit}>
        Edit
      </button>
    </div>
  );
};

export default NoteItem;
