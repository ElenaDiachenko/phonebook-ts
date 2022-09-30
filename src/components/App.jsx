import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </>
  );
};
