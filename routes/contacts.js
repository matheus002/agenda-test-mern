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
router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;

    //Criando obj contato
    const contactFields = {};
    if(name) contactFields.name = name;
    if(email) contactFields.email = email;
    if(phone) contactFields.phone = phone;
    if(type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contato não encontrado'});

        //Confirmanr que o contato pertence ao usuário
        if(contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Acesso não autorizado'});
        }

        contact = await Contact.findByIdAndUpdate(req.params.id, 
            { $set: contactFields},
            { new: true});

            res.json(contact);

    } catch (err) {  
        console.error(err.message);
        res.status(500).send('Server error');        
    }
});

// @route   DELETE api/contacts/:id
// @desc    Deletar contatos
// @access  Private
router.delete('/:id', auth,  async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contato não encontrado'});

        //Confirmanr que o contato pertence ao usuário
        if(contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Acesso não autorizado'});
        }

        await Contact.findOneAndRemove(req.params.id);

        res.json({ msg: 'Contato Removido'});

    } catch (err) {  
        console.error(err.message);
        res.status(500).send('Server error');        
    }
    
});

module.exports = router; 