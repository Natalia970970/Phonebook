import {List, ListItem } from './ContsctList.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Operations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
        );
    };
    
    const deleteContactById = contactId => {
        dispatch(deleteContact(contactId));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <List>
            {visibleContacts.map(({id, name, number}) => {
            return (
                <ListItem key={id}>
                    {name}: {number}
                    <Button type='button' onClick={() => deleteContactById(id)}>Delete</Button>
                </ListItem>
            );
        })}
        </List>
    );
};
