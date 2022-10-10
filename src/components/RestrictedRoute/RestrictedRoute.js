import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: propTypes.element.isRequired,
  redirectTo: propTypes.string.isRequired,
};
