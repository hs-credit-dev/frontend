//imports

require('dotenv').config();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const db = require('../../database/models');

//controllers

const test = (req, res) => {
    res.json({ message: 'user endpoints running'});
}

const register = (req, res) => {
    console.log('>>> user registration controller');
    formData = req.body
    db.User.findOne({ email: formData.email})
    .then(user => {
        if(user){
            return res.status(400).json({message: 'email already exists'});
        } else {
            const newUser = new db.User({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                if(err) throw Error;

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) console.log(`>>> error in hash: ${err}`);
                    newUser.password = hash;
                    newUser.save()
                    .then(createdUser => res.json(createdUser))
                    .catch(err => console.log(`user creation error: ${err}`));
                });
            });
        };
    })
    .catch( err => {
        console.log(`error finding user: ${user}`);
    })
}

const login = async (req, res) => {
    console.log(`>>> user login controlller`);
    const foundUser = await db.User.findOne({ email: req.body.email});

    if(foundUser){
        let isMatch = await bcrypt.compare(req.body.password, foundUser.password);
        console.log(`match`);
        if(isMatch){
            const payload = {
                id: foundUser.id,
                email: foundUser.email,
                username: foundUser.username
                // here we can add any additional attributes or ROLES we need to identify the user
            };
            jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
                if(err){
                    res.status(400).json({ message: '60 minute session has expired, please log in again' });
                };
                const auth = jwt.verify(token, JWT_SECRET, { expiresIn: 60 });
                res.json({ success: true, token: `Bearer ${token}`, userData: auth})
            });
        } else {
            return res.status(400).json({ message: 'email or password incorrect'});
        };
    } else {
        return res.status(400).json({ message: 'user not found'});
    };
};

const profile = (req, res) => {
    console.log(`>>> user profile controller`);
    const { id, username, email } = req;
    res.json({ id, username, email });
};

const info = (req, res) => {
    console.log(`>>> user info controller`);
    const { username } = req;
    res.json({ username });
};

const update = async(req, res) => {
    console.log(`>>> user update controller`);
    await db.User.findOneAndUpdate(req.body, (err, updateUser) => {
        //this will update user via formData, we will need to build a form and decide what part(s) of form to use for updating the user.
        if(err) console.log(err);
        updateUser = req.body;
        updateUser.save();
        res.json(updateUser);
    });
};

const user = (req, res) => {
    console.log(`>>> single user controller`);
    db.User.findOne({ _id: req.params.id}, (err, thisUser) => {
        if(err) console.log(err);
        res.json(thisUser);
    });
};

module.exports = { test, register, login, profile, info, update, user }