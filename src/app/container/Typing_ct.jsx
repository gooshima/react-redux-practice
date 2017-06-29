import {connect} from 'react-redux';

//使用するアクションを記述する
import {setMsg, heyTestAction} from '../actions/Typing_a';

import Typing from '../components/typing/Typing';

/**
 * ステートが変わるたびに呼び出される。
 * state.LinkR で、LinkR.jsで定義した、子コンポ用の プロパティを参照できる。
 */
const mapStateToProps = (state, ownProps) => {

  console.log("========== state.LinkR");
  console.log(state);
  console.log(state.Typing_r);

  //ステートから取るように設定すると、ステートが変わるたびに自動で反映するから。
  return {
    active: state.Typing_r.active,
    msg: state.Typing_r.msg
  };
}

/**
 * 子コンポの prop の処理を定義
 * クリック時の関数など。
 * dispatcher でアクションにマッピングしてあげる。
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickA: () => {

      alert("dwadwa dispatch heyLink");
      console.log("======= ownProps.msg");
      console.log(ownProps);
      console.log("========");

      dispatch(heyTestAction("こんにちは。"))
    },
    onTextChanged: (e) =>{
      console.log(e.target.value);
      //alert("text changed!!" + e.value);
      dispatch(setMsg(e.target.value))
    }
  }
}

const Typing_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing);

export default Typing_CT;