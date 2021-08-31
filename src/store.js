import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDoAction = (text) => {
  return { type: ADD, text };
};

const deleteToDoAction = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

/* action함수를 따로 export하지 않고 한 변수 안에 넣어서 한번에 export한다 */
export const actionCreator = {
  addToDoAction,
  deleteToDoAction,
};

export default store;
