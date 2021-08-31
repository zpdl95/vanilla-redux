import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

/* ToDo리스트 생성 컴포넌트 */
function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>❌</button>
    </li>
  );
}

/* 버튼에 삭제 aciton을 넣어주기 위해 이 페이지에서 dipatch를 작성 */
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreator.deleteToDoAction(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
