import { createContext } from 'react';

const initialState = {
  todoList: [
    {
      id: "1",
      content: "Buy the newspaper",
      status: false,
    },
    {
      id: "2",
      content: "Buy some take away dinner",
      status: true,
    },
  ],
};

const ApplicationContext = createContext(initialState);

export { ApplicationContext, initialState };
