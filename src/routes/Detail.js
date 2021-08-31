import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

/* useParams는 URL 인자들의 key/value(키/값) 짝들의 객체를 반환한다 */
// function Detail() {
//   const id = useParams();
//   console.log(id);
//   return <h1>Deatil</h1>;
// }

/* ?.은 옵셔녈체이닝으로 ?앞에 값이 존재하면 .뒤에 값을 체인하는 방법 */
function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

/* ownProps에 있는 params도 url에 있는 id값을 가져오는 것 */
const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  /* html에서 가져온 id 이기때문에 문자형태임 */
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
