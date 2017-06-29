/**
 * Typing画面
 */
import React, { PropTypes } from 'react';

const Typing = ({active, msg, onClickA, onTextChanged}) => {
  return (
    <div>
      <span>msg : {msg}</span><br />
      <span>active : {String(active)}</span><br />
      <input type="text" onChange={e => {
        e.preventDefault();
        onTextChanged(e)
      }}/>
      <button onClick={e => {
        e.preventDefault();
        onClickA()
      }}> 押してみてください
      </button>
    </div>
  )
}

Typing.propTypes = {
  active: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  onClickA: PropTypes.func.isRequired,
  onTextChanged: PropTypes.func.isRequired
}

export default Typing;