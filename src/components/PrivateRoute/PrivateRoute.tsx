import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

interface IProps {
  component: ReactElement;
  redirectTo: string;
}

export const PrivateRoute: FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
