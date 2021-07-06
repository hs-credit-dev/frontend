//imports

const router = require('express').Router();
const ctrl = require('../controllers');
const passport = require('passport');

//routes

router.get('/test', ctrl.user.test);

router.post('/register', ctrl.user.register);

router.post('/login', ctrl.user.login);

router.get('/profile', passport.authenticate('jwt', { session: false }), ctrl.user.profile);

router.get('/info', ctrl.user.info);

router.put('/update', ctrl.user.update);

router.get('/:id', ctrl.user.user);

module.exports = router;