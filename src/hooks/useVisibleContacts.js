import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const useVisibleContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
