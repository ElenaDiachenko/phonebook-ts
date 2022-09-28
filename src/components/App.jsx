import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, TitleContact, Section } from './App.styled';
import { fetchContacts } from '../redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList />
    </Section>
  );
};
