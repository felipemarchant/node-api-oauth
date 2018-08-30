const express = require('express');
const router = require('express-promise-router')();

const UserController = require('./../controllers/users');

router.route('/login')
    .post(UserController.login);

router.route('/register')
    .post(UserController.register);

router.route('/secret')
    .get(UserController.secret);

module.exports = router;