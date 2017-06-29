const TIME_LIMIT = 30 + 10;


//画面ロード時は default が設定される様子。
const Typing_R = (state = {}, action) => {

  //alert("R");
  // console.log("----- R ------------------------------------------------------------------------");
  // console.log(action);
  // console.log(state);
  // console.log("-----------------------------------------------------------------------------");
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
      state.msg = "ゲーム開始です！！！";
      state.odaiText_ja = action.msgByAjax.ja;
      state.odaiText_en = action.msgByAjax.en;

      return {
        ...state
      }
    case 'COUNT_DOWN_TIMER':
      if(action.isReset){
        state.gameTimer = TIME_LIMIT + 1; //+1のバグも直す
      }else{
        state.gameTimer = state.gameTimer - 1;
      }

      return {
        ...state
      }
    case 'CHECK_TYPING':
      console.log("================== check odai");
      console.log(state.odaiText_en);
      console.log(state.msg);
      console.log("================== check odai");

      if(state.odaiText_en.startsWith(state.msg)){
        console.log("ok!!!!!!!!!!!!!");
        state.odaiText_typed = state.msg;
        if(state.odaiText_typed === state.odaiText_en){
          alert("正解です！！！");
        }
      }else{
        alert("mistake...");
        console.log("ng");
      }

      return {
        ...state
      }
    default:
      return {
        active: true,
        msg: "デフォルトですyoyoyoyo。",
        gameTimer: TIME_LIMIT,//TODO 定数に Typing
        odaiText_ja: "日本語のおだいです",
        odaiText_en: "日本語に対するアルファベットです。",
        odaiText_typed: "",
      }
  }
}

export default Typing_R