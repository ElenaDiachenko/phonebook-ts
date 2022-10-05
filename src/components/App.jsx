import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Loader } from '../components/Loader/Loader';
import { useAuth } from '../hooks/useAuth';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';
import { GlobalStyle } from '../components/GlobalStyle';
import SharedLayout from '../components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      )}
    </>
  );
};
