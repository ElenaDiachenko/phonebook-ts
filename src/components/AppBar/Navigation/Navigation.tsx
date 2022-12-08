import { useAuth } from 'hooks/useAuth';
import { StyledLink, Nav } from './Navigation.styled';
import { useWindowResize } from 'hooks/useWindowResize';
import { Logo } from '../Logo/Logo';

const Navigation = () => {
  const { width } = useWindowResize();

  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Nav>
        <li>
          {width < 768 && (
            <StyledLink to="/" end>
              <Logo />
            </StyledLink>
          )}
        </li>
        {width > 767 && (
          <>
            <li>
              <StyledLink to="/">
                <Logo />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
          </>
        )}
        <li>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </li>
      </Nav>
      {/* {width > 767 ? (
        <>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </>
      ) : (
        <StyledLink to="/" end>
          <Logo />
        </StyledLink>
      )}

      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>} */}
    </nav>
  );
};

export default Navigation;
