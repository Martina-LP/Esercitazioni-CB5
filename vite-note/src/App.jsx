import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import AddNote from "./components/addNote";
import NoteContent from "./components/noteContent";
import Login from "./components/login";
import Modal from "./components/modal";

import { ApplicationCtx } from "./store";
import { useReducer } from "react";
import { initialState } from "./store";
import { globalReducer } from "./store/reducers";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {!state.user.username && !localStorage.getItem("Note-app-username") ? (
          <Login />
        ) : (
          <>
            <Navbar />
            {state.isModalOpen ? (
              <Modal />
            ) : (
              <main>
                <AddNote />
                <NoteContent />
              </main>
            )}
          </>
        )}
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;
