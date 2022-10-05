import { useAuth } from 'hooks/useAuth';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import { HeaderWrap } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderWrap>
  );
};

export default AppBar;
