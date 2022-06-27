import React from 'react'

import "../styles/button.styles.css"
function Button(props) {
    
  return (
    <button className='btn-class'>{props.text}</button>
  )
}

export default Button