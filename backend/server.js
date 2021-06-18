//imports 

require('dotenv').config(); //environment setup
const express = require('express'); //express package
const cors = require('cors'); //cross origin resource sharing package
const passport = require('passport'); //passport package to authenticate users
require('./config/passport')(passport); //sets custom config for passport
const routes = require('./routes'); //connecting route directory

//set up express
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.urlencoded({ extended: false })); //body parser for form data
app.use(express.json()); //invoking automatic json parsing
app.use(cors()); //allowing CORS requests to bypass browser firewall
app.use(passport.initialize()); //passport init for auth

//API routes
app.get(('/api/', (req, res) => {
    res.json({ name: 'hs.credit server' });
}));

app.use('/api/users', routes.user);

const server = app.listen(PORT, console.log(`>>> running backend on ${PORT}`));

module.exports = server;