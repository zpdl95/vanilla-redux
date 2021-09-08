import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

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
// const addToDoAction = createAction("ADD");
// const deleteToDoAction = createAction("DELETE");

/* @reduxjs/toolkit 사용하기 전 코드 */
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDoAction.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDoAction.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

/* 기본reducer와 동일하게 첫번째 argument는 초기값을 넣어준다 */
/* state를 새로 만들 필요없이 변화시켜도 된다 */
/* 그리고 state를 변화시키지 않고 새로 만들어 return해도 된다 */
// const reducer = createReducer([], {
//   [addToDoAction]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDoAction]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

/* createReducer과 createAction을 동시에 사용함 */
/* name을 작성할 수 있어서 구별하기에 더 좋음 */
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDoAction: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDoAction: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// const store = createStore(reducer);
/* 브라우저에서 redux-devtool을 사용할 수 있게 해줌 */
/* reducer, middleware, devTools등등 여러가지를 추가로 사용가능 */
const store = configureStore({ reducer: toDos.reducer });

/* action함수를 따로 export하지 않고 한 변수 안에 넣어서 한번에 export한다 */
// export const actionCreator = {
//   addToDoAction,
//   deleteToDoAction,
// };
export const { addToDoAction, deleteToDoAction } = toDos.actions;

export default store;
