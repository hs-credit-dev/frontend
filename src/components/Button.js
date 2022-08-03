import React from 'react'

import '../styles/components/button.styles.css'

function Button(props) {
  return (
    <div>
        <button className='btn-class'>{props.text}</button>
    </div>
  )
}

export default Button