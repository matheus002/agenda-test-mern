import React from 'react';

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact

    return (
        <div className='card bg-light'>
            <h3 className="text primary text-left">
                {name}{' '} <span className={'badge' + (type === 'profissional' ? 'badge-success' : 'badge-primary')}></span>
            </h3>
        </div>
    )
}

export default ContactItem;
