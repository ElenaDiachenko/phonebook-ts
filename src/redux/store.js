import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducers';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
// export const store = configureStore({ reducer: rootReducer });

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducers';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
