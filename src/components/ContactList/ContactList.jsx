import { Box } from '../Box';
import { ContactItem, TitleContact } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { Message } from 'components/Message/Message';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <TitleContact>Contacts</TitleContact>
      {visibleContacts.length > 0 ? (
        <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
              <Contact id={id} name={name} number={number} />
            </ContactItem>
          ))}
        </Box>
      ) : (
        <Message>Your phonebook is empty yet. Try to add new contact.</Message>
      )}
    </>
  );
};
