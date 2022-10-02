import { Box } from '../Box';
import { ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ContactItem>
      ))}
    </Box>
  );
};
