import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from '../redux/auth/auth-selectors';
import { fetchCurrentUser } from '../redux/auth/auth-operations';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { GlobalStyle } from '../components/GlobalStyle';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  console.log(isRefreshing);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {isRefreshing ? (
        <ClipLoader color="#000000" size={100} />
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
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      )}
    </>
  );
};
