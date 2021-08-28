import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

/* String을 변수값으로 변환시켜서 사용하는 이유 */
/* String으로 사용했을때 그 값이 틀리면 아무런 에러가 발생하지 않음 */
/* 때문에 변수값으로 변환시켜 사용하면 변수값이 틀렸을 경우 에러가 발생함 */
/* 에러를 알 수 있음 */
const PLUS = "Plus";
const MINUS = "Minus";

/* 첫번째 인자값으로 currentState값을 설정함 */
/* 두번째 인자값인 action은 dispatch로부터 오는 메시지를 받음 */
/* 데이터의 수정은 이 함수안에서 이루어 져야함 */
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

/* store은 state와 같이 데이터를 저장하고 수정하는 함수다 */
/* createStore함수는 데이터를 수정하는 함수를 인자값으로 받는 함수 */
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

/* subscribe는 store에 변화가 일어나면 실행됨 */
/* subscribe는 함수를 인자값으로 받음 */
countStore.subscribe(onChange);

/* dispatch는 store에 메시지를 오브젝트로 전달함 */
/* 오브젝트에는 {type:value}가 들어가야함 */
/* 메시지를 받으면 Modifier가 실행됨 */
// countStore.dispatch({ type: "Plus" });
plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
