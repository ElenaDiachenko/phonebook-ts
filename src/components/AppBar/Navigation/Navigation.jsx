import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Link, Nav, Logo } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Logo to="/">PhoneBook </Logo>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};

export default Navigation;
