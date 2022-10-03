import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import { HeaderWrap } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderWrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderWrap>
  );
};

export default AppBar;
