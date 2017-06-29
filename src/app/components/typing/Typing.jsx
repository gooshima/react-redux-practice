/**
 * Typing画面
 */
import React, { PropTypes } from 'react';

//情報エリア
import Info from './Info';

const Typing = ({active, msg, onClickA, onTextChanged}) => {
  return (

    <section className="app-main">

      <Info />

      <section id="app-main-typingArea">
        <span>msg : {msg}</span><br />
        <span>active : {String(active)}</span><br />
        <input type="text" onChange={e => {
          e.preventDefault();
          onTextChanged(e)
        }}/>
        <button onClick={e => {
          e.preventDefault();
          onClickA()
        }}> 押してください
        </button>
      </section>

    </section>
  )
}

Typing.propTypes = {
  active: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  onClickA: PropTypes.func.isRequired,
  onTextChanged: PropTypes.func.isRequired
}

export default Typing;