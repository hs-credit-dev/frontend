import { React, useState, useEffect } from 'react'
import Form from '../../Form'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utilities/setAuthToken';
import UserDashboard from '../UserDashboard';

const BasicProfile = () => {
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
            <img href="./assets/profiledefault" alt="default profile avatar" />
            <h5>About { currentUser.username }</h5>
            <p>{ currentUser.about ? currentUser.about : `${currentUser.username} doesn't have an about section yet.` }</p>
            <div className="profile-bio-section">
                { currentUser.about }
                <button onClick={() => { setIsEditMode(!isEditMode)}}>edit bio</button>
                {isEditMode ? <Form name={'Edit About'}/> : ''}
                <UserDashboard />
            </div>

        </div>
    )
}

export default BasicProfile
