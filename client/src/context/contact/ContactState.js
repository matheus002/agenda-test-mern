import React, { useReducer } from 'react';
import uuid from 'uuid';
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
                id: 1,
                name: 'Lucas Amaral',
                email: 'lulu@gmail.com',
                phone: '98835-9563',
                type: 'profissional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //  Add Contato

    //  Deletar Contato

    //  Setar contato atual

    //  Limpar contato atual

    //  Atualizar Contato

    //  Filtrar Contatos

    //  Limpar Filtros

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;