import { Box } from '../Box';
import { ContactItem, TitleContact } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { Message } from 'components/Message/Message';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { NavigateButton } from 'components/NavigateButton/NavigateButton';
import { ImPlus } from 'react-icons/im';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={16}
      >
        <TitleContact>Contacts</TitleContact>
        <NavigateButton path="/newContact">
          <ImPlus />
        </NavigateButton>
      </Box>

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
