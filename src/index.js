import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/* 함수가 받는 인자값설정으로 기초값을 설정함 */
/* 데이터의 수정은 이 함수안에서 이루어 져야함 */
const countModifier = (state = 0) => {
  return state;
};
/* store은 state와 같이 데이터를 저장하고 수정하는 함수다 */
/* createStore함수는 데이터를 수정하는 함수를 인자값으로 받는자 */
const countStore = createStore(countModifier);
