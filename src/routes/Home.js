import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
/*<></>는 여러게의 element를 return 할때 쓸 수 있는 투명한 div와 같다 */
/* onChange는 input안의 값이 변경될때 실행 */
function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

function mapStateToProps(state) {
  /* 무조건 오브젝트로 리턴해야함 */
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreator.addToDoAction(text)),
  };
}

/* connect함수를 써서 store에 있는 state를 Home함수에 연결 */
/* getCurrentState함수의 return값은 Home이 받는 props에 추가된다 */
/* connect는 'mapStateToProps'명칭의 첫번재 파라미터와 'mapDispatchToProps'라는 두번째 파라미터를 갖는다 */
/* mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다. */
/* mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다. */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
