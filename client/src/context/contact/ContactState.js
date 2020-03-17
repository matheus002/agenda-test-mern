import React, { useReducer } from 'react';
import * as uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Matheus Henrique',
        email: 'teteu@gmail.com',
        phone: '97412-9563',
        type: 'pessoal'
      },
      {
        id: 2,
        name: 'Anna Clara',
        email: 'loba_loca@gmail.com',
        phone: '97412-9512',
        type: 'pessoal'
      },
      {
        id: 3,
        name: 'Lucas Amaral',
        email: 'lulu@gmail.com',
        phone: '98835-9563',
        type: 'profissional'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //  Add Contato
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //  Deletar Contato
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //  Setar contato atual
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //  Limpar contato atual
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //  Atualizar Contato

  //  Filtrar Contatos

  //  Limpar Filtros

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
