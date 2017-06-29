/**
 * Typing画面のアクションを定義する
 */

//メッセージを変更する
export const setMsg = (argMsg) => {
  console.log("Message will be change to  : " + argMsg);
  return {
    //type: 'HEY_MESSAGE_CHANGE',
    type: 'SET_MSG',
    msg: argMsg
  }
}

export const heyTestAction = (arg) => {
  let result = "ajaxなどで取得したデータです。arg was:" + arg
  return {
    type: 'HEY_TEST',
    msgByAjax: result
  }
}
