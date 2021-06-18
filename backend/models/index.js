require('dotenv').config();
const mongoose = require('mongoose');

const { DATABASE_URL } = process.env;
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.connect(DATABASE_URL, configOptions)
.then(() => console.log(`>>> mongoDB successfully connected`))
.catch(err => console.log(`>>> mongoDB connection error: ${DATABASE_URL} :: ${err}`));

module.exports = {
    User: require('./user')
};