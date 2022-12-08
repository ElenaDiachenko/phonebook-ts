import { Nav, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <nav>
      <Nav>
        <li>
          <AuthLink to="register">Sign Up</AuthLink>
        </li>
        <li>
          <AuthLink to="login">Log In</AuthLink>
        </li>
      </Nav>
    </nav>
  );
}
