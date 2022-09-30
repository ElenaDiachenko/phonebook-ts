import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { Container, HeaderWrap } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderWrap>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </HeaderWrap>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
