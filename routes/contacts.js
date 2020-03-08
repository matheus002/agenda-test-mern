'use strict';

const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Retorna todos oss contatos do usuário
// @access  Private
router.get('/', (req, res) => {
    res.send('get todos os contatos');
});


// @route   POST api/contacts
// @desc    Adicionar novo contato
// @access  Private
router.post('/', (req, res) => {
    res.send('Add contato');
});

// @route   PUT api/contacts/:id
// @desc    Atualiar contato
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Atualizar contato');
});

// @route   DELETE api/contacts/:id
// @desc    Deletar contato
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Deletar contato');
});

module.exports = router;