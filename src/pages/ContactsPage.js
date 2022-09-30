import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Title, TitleContact, Section } from '../components/App.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Section>
  );
};

export default ContactsPage;
