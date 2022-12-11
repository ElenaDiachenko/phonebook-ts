import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;
export const selectFilter = (state: RootState) => state.filters.changeFilter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
