import {
  createSlice,
  PayloadAction,
  AnyAction,
  isPending,
} from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import { IContact } from 'interfaces/IContact';

interface IContactState {
  items: IContact[];
  isLoading: boolean;
  error: null | string;
}

const initialState: IContactState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFetchContacts = (
  state: IContactState,
  action: PayloadAction<IContact[]>
) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleAddContact = (
  state: IContactState,
  action: PayloadAction<IContact>
) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = null;
};
const handleEditContact = (
  state: IContactState,
  action: PayloadAction<IContact>
) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1, action.payload);
  state.isLoading = false;
  state.error = null;
};
const handleDeleteContact = (
  state: IContactState,
  action: PayloadAction<IContact>
) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1);
  state.isLoading = false;
  state.error = null;
};

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(editContact.fulfilled, handleEditContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(isPending, state => {
        state.isLoading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;
