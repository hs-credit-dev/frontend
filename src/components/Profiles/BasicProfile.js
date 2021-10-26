import { React, useState, useEffect } from 'react'
import Form from '../../Form'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utilities/setAuthToken';

const BasicProfile = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [clicked, setClicked] = useState(false)

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
    
    const handleClick= () => {

        setClicked(!clicked)
    }

    return (
        <div className="profile-container">
            <img href="./assets/profiledefault" alt="default profile avatar" />
            <h5>About { currentUser.name }</h5>
            <p>{ currentUser.about ? currentUser.about : `${currentUser.name} doesn't have an about section yet.` }</p>
            <div className="profile-bio-section">
                { currentUser.about }
                <button onClick={handleClick}>edit bio</button>
                {clicked ? <Form /> : ''}
            </div>

        </div>
    )
}

export default BasicProfile
