import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Link, Nav, Logo } from './Navigation.styled';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { MdOutlineContactPhone } from 'react-icons/md';

const Navigation = () => {
  const { width } = useWindowResize();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      {width < 768 ? (
        <Link to="/">
          <MdOutlineContactPhone style={{ width: '22px', height: '22px' }} />
        </Link>
      ) : (
        <>
          <Logo to="/">PhoneBook </Logo>

          <Link to="/">Home</Link>
        </>
      )}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};

export default Navigation;
