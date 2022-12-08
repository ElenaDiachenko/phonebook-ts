import { RootState } from '../store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUsername = (state: RootState) => state.auth.user.name;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
