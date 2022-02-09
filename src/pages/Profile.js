import React, { useState, useEffect } from 'react';
import { Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl } from 'reactstrap';
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
                <button className='profile-edit-button' onClick={() => { setIsEditMode(!isEditMode) }}>edit bio</button>
                {/* {isEditMode ? <Form name={'edit about'} /> : ''} */}
                {/* <UserDashboard /> */}
            </div>

            {/* Carousel */}

            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <ReactPlayer className='profile-media' width='35vw' height='55vh' url='https://youtu.be/0EgKJPrdaVI' className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item active">
                        <img src="" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Profile;
