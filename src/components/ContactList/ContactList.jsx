import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useVisibleContacts } from 'hooks/useVisibleContacts';

export const ContactList = () => {
  const visibleContacts = useVisibleContacts();

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            // onDelete={() => onDeleteContact(id)}
          />
        </ContactItem>
      ))}
    </Box>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   onDeleteContact: PropTypes.func.isRequired,
// };
