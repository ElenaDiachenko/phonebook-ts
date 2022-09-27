import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { Title, TitleContact, Section } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  // const addContact = ({ name, number }) => {
  //   const newContact = { id: nanoid(), name, number };

  //   contacts.find(contact => contact.name === name)
  //     ? Notify.info(`${name} is already in contacts`, {
  //         position: 'center-top',
  //         fontSize: '20px',
  //         width: '450px',
  //         borderRadius: '4px',
  //         closeButton: true,
  //         info: {
  //           background: '#000000',
  //           color: '#ffffff',
  //           notiflixIconColor: 'rgba(225,225,225,0.5)',
  //         },
  //       })
  //     : setContacts(prevContacts => [newContact, ...prevContacts]);
  // };

  // const filterHandler = e => {
  //   const { value } = e.target;
  //   setFilter(value.toLowerCase().trim());
  // };

  // const filterContactList = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   const filteredContacts = contacts.filter(
  //     contact => contact.id !== contactId
  //   );
  //   setContacts(filteredContacts);
  // };
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
