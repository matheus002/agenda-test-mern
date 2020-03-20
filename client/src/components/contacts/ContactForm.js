import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactsForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'pessoal'
      });
    }
  }, [contactContext, current]);

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
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'pessoal'
    });
  };

  const handleClearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Editar Contato' : 'Add Contato'}
      </h2>
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
        value={current ? 'Atualizar Contato' : 'Adicionar Contato'}
        className="btn btn-primary btn-block"
      />
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={handleClearAll}>
            Limpar
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactsForm;
