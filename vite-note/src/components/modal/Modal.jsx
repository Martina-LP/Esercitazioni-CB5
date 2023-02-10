import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(ApplicationCtx);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ON_EDIT_NOTE",
      payload: {
        id: state.currentEditNote,
        title,
        content,
      },
    });
    dispatch({ type: "ON_HANDLE_MODAL" });
  };

  const onHandleClick = () => {
    dispatch({ type: "ON_HANDLE_MODAL" });
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHandleClick}></div>
      <h1>Modal</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Edit title..."
        />
        <input
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Edit content..."
        />
        <input type="submit" value="Edit" />
      </form>
    </div>
  );
};

export default Modal;
