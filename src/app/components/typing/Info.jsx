/**
 * Typing画面
 */
import React, { PropTypes } from 'react';

const Info = ({msg2}) => {
  return (
    <section id="app-main-info">
      <hr/>
      <p>情報エリアです。</p>
      <p>{msg2}</p>
      <hr/>
    </section>
  )
}

Info.propTypes = {
  msg2: PropTypes.string,
}

export default Info;