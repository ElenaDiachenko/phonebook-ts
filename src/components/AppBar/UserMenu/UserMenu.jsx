import { useDispatch } from 'react-redux';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useAuth } from 'hooks/useAuth';
import { useWindowResize } from 'hooks/useWindowResize';
import { logOut } from 'redux/auth/auth-operations';
import { Button } from 'components/Button/Button';
import { Wrap, Nav, Content, User } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { width } = useWindowResize();
  const handleButtonClick = () => dispatch(logOut());

  return (
    <Wrap>
      <Nav>
        <Content>Welcome, </Content>
        <User>{user}</User>
      </Nav>
      {width < 768 ? (
        <Button type="button" onClick={handleButtonClick}>
          <RiLogoutBoxRLine />
        </Button>
      ) : (
        <Button type="button" onClick={handleButtonClick}>
          <>
            <span> Logout</span> <RiLogoutBoxRLine />
          </>
        </Button>
      )}
    </Wrap>
  );
};

export default UserMenu;
