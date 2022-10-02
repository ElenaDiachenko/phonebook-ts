import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const actions = [fetchContacts, addContact, deleteContact];
const handleFetchContacts = (state, action) => {
  state.items = action.payload;
};

const handleAddContact = (state, action) => {
  state.items.push(action.payload);
};
const handleDeleteContact = (state, action) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1);
};

const handleAnyFulfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleAnyPending = state => {
  state.isLoading = true;
};

const handleAnyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleAnyFulfield
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handleAnyPending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleAnyRejected
      ),
});

export const contactsReducer = contactsSlice.reducer;
