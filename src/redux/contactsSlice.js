import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
// import { nanoid } from '@reduxjs/toolkit';

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
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    // state.push(action.payload);
    //   },
    //   prepare({ name, number }) {
    //     return {
    //       payload: {
    //         name,
    //         number,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   return state.filter(contact => contact.id !== action.payload);
    // },
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
  //   extraReducers: {
  //     [fetchContacts.pending](state) {
  // state.isLoading = true;
  //     },
  //     [fetchContacts.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     [fetchContacts.rejected](state, action) {
  // state.isLoading = false;
  // state.error = action.payload;
  //     },
  //     [addContact.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [addContact.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items.push(action.payload);
  //     },
  //     [addContact.rejected](state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //     [deleteContact.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [deleteContact.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       const idx = state.items.findIndex(item => item.id === action.payload.id);
  //       state.items.splice(idx, 1);
  //     },
  //     [deleteContact.rejected](state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialContacts,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
