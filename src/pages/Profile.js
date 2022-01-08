import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utilities/setAuthToken';

import '../styles/profile.styles.css';

// import UserDashboard from '../components/UserDashboard';
import Form from '../components/Form';

const Profile = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [clicked, setClicked] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(() => {
        let token;
        //initializing token

        if (!localStorage.getItem('jwtToken')) {
            setIsAuthenticated(false);
            console.log('>>> unauthorized user, no token');
        } else {
            token = jwt_decode(localStorage.getItem('jwtToken'));
            setAuthToken(localStorage.getItem('jwtToken'));
            setCurrentUser(token);
        }
    }, []);

    const nowCurrentUser = (userData) => {
        console.log('>>> nowCurrentUser');
        setCurrentUser(userData);
        setIsAuthenticated(true);
        console.log('>>> user: userData, auth: true')
    }

    const handleClick = () => {

        setClicked(!clicked)
    }

    return (
        <div className="profile-container">
            <div className='profile-header'>
                <img src="https://raw.githubusercontent.com/mozilla/fxa/9ca5c4057cde5da1e2866cb9515e88bb18e5fb2b/packages/fxa-profile-server/lib/assets/default-profile.png" className='profile-photo' alt="default profile avatar" />
                <h5 className='profile-username-title'>About {currentUser.username}</h5>
            </div>
            <div className="profile-bio-section">

                <p>{currentUser.about ? currentUser.about : `${currentUser.username} doesn't have an about section yet.`}</p>
                {/* {currentUser.about} */}
                <button onClick={() => { setIsEditMode(!isEditMode) }}>edit bio</button>
                {isEditMode ? <Form name={'Edit About'} /> : ''}
                {/* <UserDashboard /> */}
            </div>

            <div className='profile-carousel'>
                <div className='ind-credit-container'>
                    <div className='media-container'>
                        <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <p>descrip</p>
                </div>
                <div className='ind-credit-container'>
                    <div className='media-container'>
                        <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <p>descrip</p>
                </div>
                <div className='ind-credit-container'>
                    <div className='media-container'>
                        <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <p>descrip</p>
                </div>
                <div className='ind-credit-container'>
                    <div className='media-container'>
                        <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <p>descrip</p>
                </div>
                <div className='ind-credit-container'>
                    <div className='media-container'>
                        <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <p>descrip</p>
                </div>
                <div className='ind-credit-container'>

                    <div className='media-container'>
                        <ReactPlayer className='media' width='450px' height='300px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <p>descrip</p>
                </div>
            </div>

        </div>
    )
}

export default Profile;
