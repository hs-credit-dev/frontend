const mongoose = require('mongoose');
const { Schema } = mongoose
const validator = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        minlength: [5, 'sorry, username must be between 5 and 25 characters.'],
        maxlength: 25,
        unique: [true, 'Sorry, that username has already been registered.']
    },
    email: {
        type: String, 
        unique: [true, 'sorry, {VALUE} has already been registered.'],
        trim: true,
        required: true,
        validate: [validator.isEmail, 'please enter a valid email address.']
    },
    password: {
        type: String,
        trim: true,
        minlength: [8, 'sorry, password must be at least 8 characters.'],
        maxlength: 24,
        required: [true, 'please enter a valid password.']
    }
})