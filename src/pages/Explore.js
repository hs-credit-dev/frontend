import React from 'react'
import ReactPlayer from 'react-player';

import '../styles/explore.styles.css'

const Explore = () => {
    return (
        <div className='explore-page-container'>
            <div className='explore-credits-container'>
                <div className='explore-credit-block'>
                    <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    <div className='credit-info-block'>
                        <h3>Student: </h3>
                        <h4>credit  name</h4>
                        <h5>Studio: </h5>
                        <p>descrip</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;
