import { useSelector, useDispatch } from 'react-redux';
import { selectUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Wrap, Nav, Button, Content, User } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <Wrap>
      <Nav>
        <Content>Welcome, </Content>
        <User>{name}</User>
      </Nav>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </Wrap>
  );
};

export default UserMenu;
