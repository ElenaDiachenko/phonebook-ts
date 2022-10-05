// import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// PrivateRoute.propTypes = {
//   children: propTypes.node,
//   redirectTo: propTypes.string,
// };
