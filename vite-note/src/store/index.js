import { createContext } from "react";

const initialState = {
  // noteList: [
  //   {
  //     id: 1,
  //     title: "Today is Thursday",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
  //   },
  //   {
  //     id: 2,
  //     title: "Tomorrow it will be Friday",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
  //   },
  // ],
  // initialNoteList: [
  //   {
  //     id: 1,
  //     title: "Today is Thursday",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
  //   },
  //   {
  //     id: 2,
  //     title: "Tomorrow it will be Friday",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
  //   },
  // ],
  noteList: JSON.parse(localStorage.getItem("note-list")) || [],
  initialNoteList: JSON.parse(localStorage.getItem("initial-note-list")) || [],
  user: {
    username: localStorage.getItem("Note-app-username"),
  },
  currentEditNote: null,
  isModalOpen: false,
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
