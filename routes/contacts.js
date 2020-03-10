'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contacts');

// @route   GET api/contacts
// @desc    Retorna todos oss contatos do usuário
// @access  Private
router.get('/', auth, async (req, res) => {
   try {
       const contacts = await Contact.find({ user: req.user.id }).sort({ data: -1 });
       res.json(contacts);
   } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
   }
});

// @route   POST api/contacts
// @desc    Adicionar novo contato
// @access  Private
router.post('/', [auth, [
    check('name', 'Nome é requerido').notEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();

        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
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