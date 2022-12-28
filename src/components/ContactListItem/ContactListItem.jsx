import { Button } from 'commonStyles/coommonStyles.styled';
import { Item, ItemName } from './ContactListItem.styled';
import { FaPhoneAlt, FaUserAlt, FaTrash } from 'react-icons/fa';

const ContactListItem = ({ id, number, name, onDelete }) => {
  return (
    <Item>
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

export default ContactListItem;
