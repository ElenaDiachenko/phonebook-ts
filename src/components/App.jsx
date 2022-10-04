import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Loader } from '../components/Loader/Loader';
import { selectIsRefreshing, selectError } from '../redux/auth/auth-selectors';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';
import { GlobalStyle } from '../components/GlobalStyle';
import SharedLayout from '../components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {error && <p>Try later</p>}
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      )}
    </>
  );
};
