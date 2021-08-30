import React, { useState } from "react";
/*<></>는 여러게의 element를 return 할때 쓸 수 있는 투명한 div와 같다 */
/* onChange는 input안의 값이 변경될때 실행 */
function Home() {
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(text);
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

export default Home;
