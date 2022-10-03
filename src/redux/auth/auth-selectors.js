export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;

export const selectUsername = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
