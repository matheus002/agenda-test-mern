import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactsForm = () => {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'pessoal'
  });

  const { name, email, phone, type } = contact;

  const handleOnChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'pessoal'
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Adicionar Contato</h2>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        value={name}
        onChange={handleOnChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleOnChange}
      />
      <input
        type="text"
        placeholder="Telefone"
        name="phone"
        value={phone}
        onChange={handleOnChange}
      />
      <h5>Tipo do Contato: </h5>
      <input
        type="radio"
        name="type"
        value="pessoal"
        checked={type === 'pessoal'}
        onChange={handleOnChange}
      />{' '}
      Pessoal{' '}
      <input
        type="radio"
        name="type"
        value="profissional"
        checked={type === 'profissional'}
        onChange={handleOnChange}
      />
      Profissional
      <input
        type="submit"
        value="Add contato"
        className="btn btn-primary btn-block"
      />
    </form>
  );
};

export default ContactsForm;
