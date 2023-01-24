import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../redux/Operations';
// import { Container } from './../../components/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContsctList/ContsctList';

export const ContactsPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => Boolean(state.contacts.items.length));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts && <ContactList />}
        </>
    );
};
