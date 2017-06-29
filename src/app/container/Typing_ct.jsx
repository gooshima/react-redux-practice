import {connect} from 'react-redux';

//使用するアクションを記述する
import {setMsg, heyTestAction, checkTyping, countDownTimer} from '../actions/Typing_a';

import Typing from '../components/typing/Typing';

/**
 * ステートが変わるたびに呼び出される。
 * state.LinkR で、LinkR.jsで定義した、子コンポ用の プロパティを参照できる。
 */
const mapStateToProps = (state, ownProps) => {

  // console.log("========== state.LinkR");
  // console.log(state);
  // console.log(state.Typing_r);
  //let s = state.Typing_r
  //ステートから取るように設定すると、ステートが変わるたびに自動で反映するから。
  return {
    ...state.Typing_r
  }
  // return {
  //   active: state.Typing_r.active,
  //   msg: state.Typing_r.msg
  // };
}

/**
 * 子コンポの prop の処理を定義
 * クリック時の関数など。
 * dispatcher でアクションにマッピングしてあげる。
 */
let isGameStart = false;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    onClickStartBtn: (argGameTimer) => {

      dispatch(heyTestAction("こんにちは。"));

      var time = argGameTimer;
      if(!isGameStart){
        isGameStart = true;
        var timer = setInterval(function(){
          if(time === 0){
            alert("終了！！");
            dispatch(countDownTimer(true));
            isGameStart = false;
            clearInterval(timer)
          }
          time --;
          dispatch(countDownTimer());
        },1000)
      }

    },

    onTextChanged: (e) =>{
      console.log(e.target.value);
      //alert("text changed!!" + e.value);
      dispatch(setMsg(e.target.value));
      dispatch(checkTyping());
    }
  }
}

const Typing_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing);

export default Typing_CT;