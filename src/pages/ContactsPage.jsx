import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MainTitle } from './HomePage.styled'

import { fetchContacts } from '../redux/Operations';
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
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <MainTitle>Contacts</MainTitle>
        <Filter />
        {contacts && <ContactList />}
        </>
    );
};
