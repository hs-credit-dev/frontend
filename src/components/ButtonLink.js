import React from 'react'

import "../styles/button.styles.css"
function ButtonLink(props) {

  return (
    <button className='btn-class'><a href="/login">{props.text}</a></button>
  )
}

export default ButtonLink;