//imports 

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';
import axios from 'axios'




//styling

import './styles/App.css';

//components
// import MainNavBar from './components/NavBars/NavBar'

// import Profile from './components/Profile'
import Login from './pages/Login'
// import StudentSignUp from './pages/StudentSignUp';
import BasicUserSignUp from './pages/BasicUserSignUp';
// import ProfileCarousel from './components/ProfileCarousel';
import StudentProfile from './pages/StudentProfile'
import NavBar from './components/NavBars/NavBar'
import BasicProfile from './pages/BasicProfile';
//private routes for authorized users

const PrivateRoute = ({ component: Component, ...rest }) => {
    let token = localStorage.getItem('jwtToken');
    console.log('>>>>inside private route');
    return <Route {...rest} render={(props) => {
        return token ? <Component {...rest} /> : <Redirect to='/login' />
    }} />
}

//main parent component to render application

const App = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [allData, setAllData] = useState('')

    const getData = async () => {
        const res = await axios.get('/api')
        setAllData(res.data)
    }
    useEffect(() => {
        getData()
    }, [])


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

    // const currentTime = new Date().getTime() / 1000

    // if (currentTime > currentUser.exp){
    //     console.log(`auth token expired, logging user out. \ncurrent time: ${currentTime}\ntoken expiration: ${currentUser.exp}`);
    //     handleLogout();
    // }

    return (
        <div className='app'>
            {/* <Router> */}
                <NavBar handleLogout={handleLogout} isAuth={isAuthenticated} />
            {/* {isAuthenticated ? <button onClick={handleLogout}> click here to logout </button> : <input type='hidden'/>} */}
            {/* <ProfileCarousel /> */}
            {/* <Home /> */}
            {/* <Route exact path='/about' component={About} /> */}


            {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}

            <div className='mainAppContainer'>
                <Switch>
                    {/* <Route exact path='/studentsignup' component={StudentSignUp} user={currentUser} /> */}
                    <Route exact path='/signup' component={BasicUserSignUp} />

                    <Route exact path='/profile' component={BasicProfile} user={currentUser} />
                    <Route
                        exact path='/login'
                        render={(props) =>
                            <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
                    <PrivateRoute exact path='/studentprofile' component={StudentProfile} user={currentUser} handleLogout={handleLogout} />
                </Switch>
            </div>
            {/* <Footer />  */}

            {/* </Router> */}
            {routes}
        </div >
    );
}

export default App;