import React from 'react';
import ReactPlayer from "react-player";
// import Grid from '@mui/material/Grid'
import '../styles/credit-details.styles.css'

const CreditDetails = () => {
    return (
        <div className='credit-details-container'>
            <div className='credit-details-credit-container'>

                <div className='credit-details-header'>
                    <ReactPlayer
                        className='credit-details-media'
                        width='800px' height='300px'
                        url="https://youtu.be/r3qNES6HLu0"
                    />
                    <div className='credit-details-title-block'>
                        <h4 className='credit-details-title'>Espionage in The American Revolution</h4>
                        <h5 className='credit-details-student'>jmeyer23</h5>
                        <h5 className='credit-details-prompt'>Prompt: How did George Washington's espionage make a difference in the American Revolutionary War?</h5>
                    </div>
                </div>
                <hr />
                <p className='credit-details-description'>George Washington—known as Agent 711 in the Culper Spy Ring—is often heralded as a great “spymaster,” and indeed, he was. Under Washington’s astute watch, several networks of spies operated in both close-knit circles and far-reaching societies. The undercover agents were merchants, tailors, farmers, and other extraordinary patriots with ordinary day jobs. Much as with modern-day operatives, the members of these networks kept at a distance from each other and maintained secret identities. In some cases, Washington himself didn’t even know the identities of the men who worked together in secret to aid the cause of freedom.

                    The emergence of an organized American intelligence community under Washington’s watch shouldn’t come as a surprise. Compared to the formidable British forces, Washington’s army was under-trained, under-staffed, under-equipped, and under-funded. In order to win, he needed to out-maneuver and out-smart the enemy.</p>
            </div>
        </div>
    )
}

export default CreditDetails;
