import { createContext } from 'react';

const Context = createContext();

const state = {
  story: {
    title: "S'abbenerica...",
    paragraph: "Rintra un palazzu c'è un cani pazzu. Tè pazzu cani stu tozzu ri pani!",
  },
};

export { state, Context };
