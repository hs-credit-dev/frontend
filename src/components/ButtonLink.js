import React from 'react'

import "../styles/components/button.styles.css"
function ButtonLink(props) {

  return (
    <a href={props.link}><button className='btn-class'>{props.text}</button></a>
  )
}

export default ButtonLink;