import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/nav.styles.css'

export const NavBar = (props) => {
    return (
        <nav className="nav">


            {props.isAuth ?
                <nav>
                    <a href='/'>
                        <img className="hsc-logo-landing" src='https://i.imgur.com/t5GkphG.png' alt='hsc logo' />
                    </a>
                    <ul >
                        <li className="nav-li">
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className="nav-li" >
                            <NavLink to="/browse">Browse</NavLink>
                        </li>

                        {/* <li >
                            <NavLink to="/registeras">Register as</NavLink>
                        </li> */}

                        <li className="nav-li">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>

                        <li className="nav-li" id='logout'>
                            <span onClick={props.handleLogout}>Logout</span>
                        </li>
                    </ul>
                </nav> :
                <ul>
                    <li className="nav-li">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to='/login'>Login</NavLink>
                    </li>

                    <li className="nav-li">
                        <NavLink to="/signup">Sign up</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>}


        </nav>
    );
}


// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

// import setAuthToken from '../../utilities/setAuthToken'
// import jwt_decode from 'jwt-decode'


// const NavBar = (props) => {
//     // const [auth, setAuth] = React.useState(true);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [currentUser, setCurrentUser] = useState('');
//     const [isAuthenticated, setIsAuthenticated] = useState(true);


//     useEffect(() => {
//         let token;
//         //initializing token

//         if (!localStorage.getItem('jwtToken')) {
//             setIsAuthenticated(false);
//             console.log('>>> unauthorized user, no token');
//         } else {
//             token = jwt_decode(localStorage.getItem('jwtToken'));
//             setAuthToken(localStorage.getItem('jwtToken'));
//             setCurrentUser(token);
//         }
//     }, []);

//     const nowCurrentUser = (userData) => {
//         console.log('>>> nowCurrentUser');
//         setCurrentUser(userData);
//         setIsAuthenticated(true);
//         console.log('>>> user: userData, auth: true')
//     }
//     const handleChange = (event) => {
//         setIsAuthenticated(event.target.checked);
//     };

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             {props.isAuth ?


//                 <AppBar position="static">
//                     <Toolbar>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color=""
//                             aria-label="menu"
//                             sx={{ mr: 2 }}
//                         >
//                             <DragIndicatorIcon />
//                         </IconButton>
//                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                             Welcome to H.S. Credit
//                         </Typography>

//                         <Toolbar>
//                             <IconButton
//                                 size="large"
//                                 edge="start"
//                                 color="inherit"
//                                 aria-label="menu"
//                                 sx={{ mr: 2 }}
//                             >
//                                 <DragIndicatorIcon />
//                             </IconButton>
//                             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                 {currentUser.username}
//                             </Typography>
//                         </Toolbar>
//                         <div>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleMenu}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                             </Menu>
//                         </div>

//                     </Toolbar>
//                 </AppBar> :

//                 <AppBar position="static">
//                     <Toolbar>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             sx={{ mr: 2 }}
//                         >
//                             <DragIndicatorIcon />
//                         </IconButton>

//                     </Toolbar>
//                     <Toolbar>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             sx={{ mr: 2 }}
//                         >
//                             <DragIndicatorIcon />
//                         </IconButton>
//                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                             {currentUser.username}
//                         </Typography>
//                         <div>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleMenu}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                             </Menu>
//                         </div>

//                     </Toolbar>
//                 </AppBar>}
//         </Box>
//     );
// }

export default NavBar

