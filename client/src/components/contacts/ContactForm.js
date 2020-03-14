import React, { useState } from 'react';

const ContactsForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'pessoal'
  });

  const { name, email, phone, type } = contact;

  const handleOnChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <form>
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
        check={type === 'pessoal'}
      />{' '}
      Pessoal{' '}
      <input
        type="radio"
        name="type"
        value="profissional"
        check={type === 'profissional'}
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
