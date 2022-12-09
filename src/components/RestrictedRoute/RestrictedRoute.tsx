import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

interface IProps {
  component: ReactElement;
  redirectTo: string;
}

export const RestrictedRoute: FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
