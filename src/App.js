//imports 

import React, { Component, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';




//styling

import './App.css';

//components

import Home from './components/Home'

// import Navbar from './components/Navbar';

//private routes for authorized users

const PrivateRoute = ({ component: Component, ...rest }) => {
    let token = localStorage.getItem('jwtToken');
    console.log('>>>>inside private route');
    return <Route {...rest} render={(props) => {
        return token ? <Component {...rest} /> : <Redirect to="/login" />
    }} />
}

//main parent component to render application

function App() {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        let token;
        //initializing token

        if(!localStorage.getItem('jwtToken')) {
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

    const handleLogout = () => {
        console.log('>>> handleLogout');
        if(localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken');
            setCurrentUser(null);
            setIsAuthenticated(false);
            console.log('>>> user: null, auth: false');
        }
    }

    return (
        <div className="App">
            
           <Home />
                
            
            {/* 
            <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />

            <div className="mainAppContainer">
                <Switch>
                    <Route exact path='signup' component={Signup} />
                    <Route exact path='/login' render={(props) => 
                    <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
                    <PrivateRoute exact path='/profile' component={Profile} user={currentUser} handleLogout={handleLogout} />
                    <Route exact path='/' component={Welcome} />
                </Switch>
            </div>
            <Footer /> 
            */}
        </div>
    );
}

export default App;