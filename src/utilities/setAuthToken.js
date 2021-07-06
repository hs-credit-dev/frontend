import axios from 'axios';

//this utility adds auth'd users' jwt to the request header
//any protected routes will require jwt for access

const setAuthToken = (token) => {
    if(token){
        axios.defaults.headers.common['Authorization'] = token
        console.log('>>> header');
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;