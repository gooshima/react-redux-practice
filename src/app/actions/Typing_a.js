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

export const checkTyping = (argMsg) => {
  console.log("Message will be change to  : " + argMsg);
  return {
    //type: 'HEY_MESSAGE_CHANGE',
    type: 'CHECK_TYPING'
  }
}

export const countDownTimer = (isReset = false) => {
  return {
    type: 'COUNT_DOWN_TIMER',
    isReset
  }
}


export const heyTestAction = (arg) => {
  let result = "ajaxなどで取得したデータです。arg was:" + arg
  return {
    type: 'HEY_TEST',
    msgByAjax: {
      ja: "賃貸マンションのここ掘れ、ワンワンなホワイトチョコレートの招き猫と握手し馬の耳に念仏で今日は楽しかったよと低気圧と高気圧で豊富なボキャブラリーのそこを右折してくださいと牛肉のカルパッチョのスモモも桃も桃のうち",
      en: "tintaimanshonnnokokohore,wanwannnahowaitochokore-tonomanekinekotoakushusiumanomimininenbutudekyouhatanosikattayototeikiatutokoukiatudehouhunabokyaburari-nosokowousetusitekudasaitogyuunikunokarupacchonosumomomomomomomomonouti"
    }

  }
}
