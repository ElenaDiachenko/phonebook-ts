import { useSelector, useDispatch } from 'react-redux';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { selectUsername } from 'redux/auth/auth-selectors';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { logOut } from 'redux/auth/auth-operations';
import { Button } from 'components/Button/Button';
import { Wrap, Nav, Content, User } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  const { width } = useWindowResize();
  const handleButtonClick = () => dispatch(logOut());

  return (
    <Wrap>
      <Nav>
        <Content>Welcome, </Content>
        <User>{name}</User>
      </Nav>
      {width < 768 ? (
        <Button type="button" onClick={handleButtonClick}>
          <RiLogoutBoxRLine />
        </Button>
      ) : (
        <Button type="button" onClick={handleButtonClick}>
          <>
            <span> LogOut</span> <RiLogoutBoxRLine />
          </>
        </Button>
      )}
    </Wrap>
  );
};

export default UserMenu;
