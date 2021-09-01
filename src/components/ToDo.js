import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";

/* ToDo리스트 생성 컴포넌트 */
function ToDo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>❌</button>
    </li>
  );
}

/* 버튼에 삭제 aciton을 넣어주기 위해 이 페이지에서 dipatch를 작성 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreator.deleteToDoAction(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
