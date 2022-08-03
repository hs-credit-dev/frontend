//imports 

import React, { useEffect, useState } from 'react';
import routes from './config/routes';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';
import axios from 'axios'

//styling

import './styles/App.css';


//components

import Login from './pages/Login'
import Loggedout from './pages/Loggedout'
import BasicUserSignUp from './pages/BasicUserSignUp';
import StudentSignUp from './pages/StudentSignUp';
import Profile from './pages/Profile';
import StudentProfile from './pages/StudentProfile'
import NavBar from './components/NavBars/NavBar'
import TopNavBar from './components/NavBars/TopNavBar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CreditDetails from './pages/CreditDetails';
import CreditSearch from './pages/CreditSearch';
import About from './pages/About';
import Contact from './components/Contact';


import TeacherSignUp from './pages/TeacherSignUp';

// import ProfileCarousel from './components/ProfileCarousel';
// import MainNavBar from './components/NavBars/NavBar'


// private routes for authorized users

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
            {/* <TopNavBar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}
            <NavBar handleLogout={handleLogout} isAuth={isAuthenticated} />
            {/* {isAuthenticated ? <button onClick={handleLogout}> click here to logout </button> : <input type='hidden'/>} */}
            {/* <ProfileCarousel /> */}
            {/* <Home /> */}
            {/* <Route exact path='/about' component={About} /> */}
            {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}

            <div className='mainAppContainer'>
                <Switch>

                    <Route exact path='/frontend' component={Home} />
                    <Route exact path='/basic-signup' component={BasicUserSignUp} />
                    <Route exact path='/student-signup' component={StudentSignUp} />
                    <Route exact path='/profile' component={Profile} user={currentUser} />
                    <Route exact path='/explore' component={ Explore } />
                    <Route exact path='/credit-search' component={ CreditSearch } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/contact' component={ Contact } />
                    <Route exact path='/logout' component={ Loggedout } />

                    <Route exact path='/teacher-signup' component={ TeacherSignUp } />

                    <Route exact path='/username/credits/the-revolutionary-war' component={ CreditDetails } />
                    <Route
                        exact path='/login'
                        render={(props) =>
                            <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
                    <PrivateRoute exact path='/studentprofile' component={ StudentProfile } user={currentUser} handleLogout={handleLogout} />
                </Switch>
            </div>
            {/* <Footer />  */}

            {/* </Router> */}
            { routes }
        </div >
    )
}

export default App;