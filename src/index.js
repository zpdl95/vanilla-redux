import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "Add_toDo";
const DELETE_TODO = "Delete_toDo";

/* action의 내용을 보다 쉽게 관리하기 위해서 따로 작성함 */
const addToDoAction = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};

const deleteToDoAction = (id) => {
  return { type: DELETE_TODO, id };
};

/* state를 수정할 수 없다. 따라서 state를 매번 새로 만들어야 한다 */
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const DispatchAddToDo = (text) => {
  store.dispatch(addToDoAction(text));
};

const DispatchDeleteToDo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch(deleteToDoAction(id));
};

const paintToDo = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", DispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  DispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
