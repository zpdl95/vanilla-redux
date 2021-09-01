import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

/* @reduxjs/toolkit 사용하기 전 코드 */
// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDoAction = (text) => {
//   return { type: ADD, text };
// };
// const deleteToDoAction = (id) => {
//   return { type: DELETE, id };
// };

/* toolkit을 사용하면 action.type을 여러번 사용하지 않아도 된다 */
/* action을 통해 받는 값을 payload이름으로 통일할 수 있다 */

/* createAction으로 생성된 action은 type과 payload를 key값으로 가지게 된다 */
/* action생성시 주어지는 argument값이 type의 value가 된다 */
/* 나머지 argument값은 payload의 value값이 된다 */
const addToDoAction = createAction("ADD");
const deleteToDoAction = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDoAction.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDoAction.type:
      return state.filter((toDo) => toDo.id !== action.payload);
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
