import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, number, name }) => (
        <ContactListItem
          id={id}
          number={number}
          name={name}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default ContactList;
