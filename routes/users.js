'use strict';

const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Registrar um usuário
// @access  Public
router.post('/', (req, res) => {
    res.send('Registrar um usuário');
});

module.exports = router;