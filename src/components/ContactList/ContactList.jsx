import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <Contact
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      </ContactItem>
    ))}
  </Box>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func.isRequired,
};
