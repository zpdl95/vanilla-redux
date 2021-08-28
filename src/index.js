import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/* 함수가 받는 첫번째 인자값설정으로 기초값을 설정함 */
/* 두번째 인자값은 첫번째인자를 수정할수 있도록 하는 action이 들어감 */
/* 데이터의 수정은 이 함수안에서 이루어 져야함 */
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "Plus") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
};
/* store은 state와 같이 데이터를 저장하고 수정하는 함수다 */
/* createStore함수는 데이터를 수정하는 함수를 인자값으로 받는 함수 */
const countStore = createStore(countModifier);

/* dispatch는 store에 메시지를 오브젝트로 전달함 */
/* 메시지를 받으면 Modifier가 실행됨 */
countStore.dispatch({ type: "Plus" });
countStore.dispatch({ type: "Minus" });
