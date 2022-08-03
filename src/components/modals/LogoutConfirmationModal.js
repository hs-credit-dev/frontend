import React from 'react'
import Button from '../Button'

import '../../styles/components/modals/logout-confirmation-modal.styles.css'

function LogoutConfirmationModal(props) {
  return (
    <div className='modal-container'>
        <div className='modal-body'>{props.body}</div>
        <div className='modal-buttons'>
            <Button text="Yes"/>
            <Button text="Cancel"/>
        </div>
        </div>
  )
}

export default LogoutConfirmationModal;