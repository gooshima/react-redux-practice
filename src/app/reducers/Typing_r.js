
//画面ロード時は default が設定される様子。
const Typing_R = (state = {}, action) => {

  //alert("R");
  console.log("----- R ------------------------------------------------------------------------");
  console.log(action);
  console.log(state);
  console.log("-----------------------------------------------------------------------------");
  //alert("a");

  switch (action.type) {
    case 'SET_MSG':
      state.msg = action.msg;
      return {
        ...state
      }
      // return {
      //   active: state.active,
      //   msg: action.msg
      // }
    case 'HEY_TEST':
      state.msg = action.msgByAjax;
      return {
        ...state
      }
    default:
      return {
        active: true,
        msg: "デフォルトです。"
      }
  }
}

export default Typing_R