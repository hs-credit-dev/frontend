//imports 

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import { BrowserRouter as Router, Route, Redirect,Switch,Navbar } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';




//styling

import './App.css';

//components
import MainNavBar from './components/NavBars/MainNavBar'
import Home from './components/Home'
// import Profile from './components/Profile'
import Login from './components/Login'
import StudentSignUp from './components/StudentSignUp';
import EducatorSignUp from './components/EducatorSignUp';

//private routes for authorized users

const PrivateRoute = ({ component: Component, ...rest }) => {
    let token = localStorage.getItem('jwtToken');
    console.log('>>>>inside private route');
    return <Route {...rest} render={(props) => {
        return token ? <Component {...rest} /> : <Redirect to="/login" />
    }} />
}

//main parent component to render application

const App = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);

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

    const handleLogout = () => {
        console.log('>>> handleLogout');
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken');
            setCurrentUser(null);
            setIsAuthenticated(false);
            console.log('>>> user: null, auth: false');
        }
    }

    return (
        <div className="App">
            {/* <Router> */}
            <MainNavBar />
                
                {/* <Home /> */}
                {/* <Route exact path="/about" component={About} /> */}
                {/* <Route exact path="/signup" component={BasicUserSignUp} /> */}

                
            {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}

            <div className="mainAppContainer">
                <Switch>
                
                    <Route exact path='/studentsignup' component={StudentSignUp} user={currentUser} /> 
                    <Route exact path='/educatorsignup' component={EducatorSignUp} user={currentUser}/>
                    <Route
                     exact path='/login' 
                     render={(props) => 
                        <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
                    {/* <PrivateRoute exact path='/profile' component={Profile} user={currentUser} handleLogout={handleLogout} /> */}
                    </Switch>
            </div>
            {/* <Footer />  */}
            
            {/* </Router> */}
            {routes}
        </div>
    );
}

export default App;