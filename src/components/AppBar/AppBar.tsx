import { useAuth } from 'hooks/useAuth';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import { HeaderWrap } from './AppBar.styled';
import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </HeaderWrap>
  );
};

export default AppBar;
