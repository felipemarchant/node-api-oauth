const express = require('express');
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../helpers/routehelpers');
const passport = require('passport');
const passportConf = require('../passport');
const UserController = require('../controllers/users');

router.route('/login')
    .post(validateBody(schemas.authSchema), UserController.login);

router.route('/register')
    .post(validateBody(schemas.authSchema), UserController.register);

router.route('/secret')
    .get(passport.authenticate('jwt',{ session : false }), UserController.secret);

module.exports = router;