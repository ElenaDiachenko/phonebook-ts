import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const useVisibleContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
