import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from 'components/Container/Container';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { Outlet } from 'react-router-dom';

const ContactsPage = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Outlet />
      <Filter />
      {isLoading && !error && (
        <ClipLoader style={{ margin: '0 auto' }} color="#000000" size={32} />
      )}
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
