import { actions } from "./actions";

const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NEW_NOTE:
      localStorage.setItem(
        "note-list",
        JSON.stringify([...state.noteList, action.payload])
      );
      localStorage.setItem(
        "initial-note-list",
        JSON.stringify([...state.initialNoteList, action.payload])
      );

      return {
        ...state,
        noteList: [...state.noteList, action.payload],
        initialNoteList: [...state.noteList, action.payload],
      };
    case actions.SET_USERNAME:
      localStorage.setItem("Note-app-username", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    case actions.REMOVE_USERNAME:
      localStorage.removeItem("Note-app-username");
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
        },
      };
    case actions.ON_SEARCH_NOTE:
      return {
        ...state,
        noteList: state.initialNoteList.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case actions.ON_DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id !== action.payload),
      };
    case actions.ON_SET_CURRENT_EDIT_NOTE:
      return {
        ...state,
        currentEditNote: parseInt(action.payload),
      };
    case actions.ON_EDIT_NOTE:
      return {
        ...state,
        noteList: state.noteList.map((note) => {
          if (note.id === state.currentEditNote) {
            return action.payload;
          };
          return note;
        }),
      };
    case actions.ON_HANDLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  };
};

export { globalReducer };
