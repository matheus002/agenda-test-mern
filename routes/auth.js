'use strict';

const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    get user logado
// @access  Private
router.get('/', (req, res) => {
    res.send('get user logado');
});


// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('User Logado!');
});


module.exports = router;