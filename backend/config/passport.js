require('dotenv').config();

const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
// we will need to bring in another orm for whichever db we choose

const { User } = require('../models/user');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new Strategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch(error => {
            console.log(`>>> passport.js module export error ${error}`)
        });
    }));
};