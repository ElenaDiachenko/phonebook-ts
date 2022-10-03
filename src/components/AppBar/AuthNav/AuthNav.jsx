import { Nav, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Nav>
      <AuthLink to="/register">Sign Up</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </Nav>
  );
}
