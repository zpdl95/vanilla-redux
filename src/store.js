import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDoAction = (text) => {
  return { type: ADD, text };
};

export const deleteToDoAction = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now(), ...state }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
