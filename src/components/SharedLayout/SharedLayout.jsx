import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
      </Container>
    </Wrapper>
  );
};

export default SharedLayout;
