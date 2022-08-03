import React from 'react'

import '../styles/pages/contact.styles.css'

const Contact = () => {
    return (
        <div className='contact-container'>

            <div className='contact-card'>
                <h3 className='contact-title'>Contact Us</h3>
                <h3>Got a question? We'll give you straight answers</h3>
                <img className='contact-card-logo' src="https://i.imgur.com/t5GkphG.png" alt="hs.credit logo" />
                <h4>244 5th Avenue
                    Suite N269
                    New York, NY 10001
                    info@hs.credit
                </h4>
                <p className='contact-phone-number'>(212) 518-1586</p>
            </div>

        </div>
    )
}

export default Contact
