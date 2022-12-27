import PropTypes from 'prop-types';
import { Button } from 'commonStyles/coommonStyles.styled';
import { Item, List, ItemName } from './ContactList.styled';
import { FaPhoneAlt, FaUserAlt, FaTrash } from 'react-icons/fa';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, number, name }) => (
        <Item key={id}>
          <ItemName>
            <FaUserAlt fill="orange" /> {name}:
          </ItemName>
          <span>
            <FaPhoneAlt fill="orange" /> {number}
          </span>
          <Button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            <FaTrash /> Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
