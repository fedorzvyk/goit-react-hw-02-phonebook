import PropTypes from 'prop-types';
import { Button } from 'commonStyles/coommonStyles.styled';
import { Item, ItemName } from './ContactListItem.styled';
import { FaPhoneAlt, FaUserAlt, FaTrash } from 'react-icons/fa';

const ContactListItem = ({ id, number, name, onDelete }) => {
  return (
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
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
