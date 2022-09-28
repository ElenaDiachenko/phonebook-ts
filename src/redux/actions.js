import { createAction, nanoid } from '@reduxjs/toolkit';
//  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filters/setFilter');

// import { nanoid } from '@reduxjs/toolkit';
// //  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },

// export const addContact = ({ name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       name,
//       number,
//       id: nanoid(),
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'filters/setFilter',
//     payload: value,
//   };
// };
