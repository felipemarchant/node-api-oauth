const express = require('express');
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../helpers/routehelpers');
const UserController = require('../controllers/users');

router.route('/login')
    .post(validateBody(schemas.authSchema), UserController.login);

router.route('/register')
    .post(UserController.register);

router.route('/secret')
    .get(UserController.secret);

module.exports = router;