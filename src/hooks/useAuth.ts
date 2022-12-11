import { useAppSelector } from 'redux/hooks';
import {
  selectUsername,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
