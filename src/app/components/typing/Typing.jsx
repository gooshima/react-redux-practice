/**
 * Typing画面
 */
import React, { PropTypes } from 'react';

//情報エリア
import Info from './Info';

const Typing = ({active, msg, onClickStartBtn, onTextChanged, gameTimer, odaiText_ja, odaiText_en, odaiText_typed}) => {
// const Typing = ({...state}) => {
//   console.log("hoge===========================");
//   console.log(state);
//   console.log("hoge===========================");
  var resultStyle= {
    color: 'red',
  }
  return (

    <section className="app-main">

      <Info />

      <section id="app-main-typingArea">

        <ul>
          <li>タイマー : {gameTimer}</li>
          <li><h2>お題 : {odaiText_ja}</h2></li>
          <li><h2>en : {odaiText_en}</h2></li>
          <li><h3>入力結果 : <span style={resultStyle}>{odaiText_typed}</span></h3></li>
        </ul>

        <h3>msg : {msg}</h3>
        <span>active : {String(active)}</span><br />
        <input type="text" onChange={e => {
          e.preventDefault();
          onTextChanged(e)
        }}/>
        <button onClick={e => {
          e.preventDefault();
          onClickStartBtn(gameTimer)
        }}> タイピング開始
        </button>
      </section>

    </section>
  )
}

Typing.propTypes = {
  active: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  onClickStartBtn: PropTypes.func.isRequired,

  onTextChanged: PropTypes.func.isRequired,
  gameTimer: PropTypes.number.isRequired,
  odaiText_ja: PropTypes.string.isRequired,
  odaiText_en: PropTypes.string.isRequired,
  odaiText_typed: PropTypes.string //TODO required
}

export default Typing;