import { useAuth } from 'hooks/useAuth';
import { LinkMenu, Nav } from './Navigation.styled';
import { useWindowResize } from '../../../hooks/useWindowResize';

const Navigation = () => {
  const { width } = useWindowResize();

  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      {width > 767 ? <LinkMenu to="/">Home</LinkMenu> : null}
      {isLoggedIn && <LinkMenu to="/contacts">Contacts</LinkMenu>}
    </Nav>
  );
};

export default Navigation;
