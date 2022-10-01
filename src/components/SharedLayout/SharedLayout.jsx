import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { Container, HeaderWrap } from './SharedLayout.styled';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <HeaderWrap>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderWrap>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
