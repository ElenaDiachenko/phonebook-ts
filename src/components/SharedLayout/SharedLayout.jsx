import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';
import { Wrapper, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#e5930e',
              color: '#fff',
            },
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default SharedLayout;
