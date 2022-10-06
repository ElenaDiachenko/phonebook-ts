import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';
import { Wrapper } from './SharedLayout.styled';
import { Footer } from '../Footer/Footer';
import { Box } from 'components/Box';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <AppBar />
        <Box as="main" display="flex" flexGrow={1} minWidth="100%">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
        <Footer />
      </Wrapper>
    </>
  );
};

export default SharedLayout;
