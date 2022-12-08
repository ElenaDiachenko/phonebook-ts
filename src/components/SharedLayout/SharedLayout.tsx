import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';
import { Wrapper, StyledMain } from './SharedLayout.styled';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <AppBar />
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledMain>
        <Footer />
      </Wrapper>
    </>
  );
};

export default SharedLayout;
