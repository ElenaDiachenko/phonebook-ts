import { RootState } from '../store';

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;
export const selectFilter = (state: RootState) => state.filters.changeFilter;

export const selectVisibleContacts = (state: RootState) => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
