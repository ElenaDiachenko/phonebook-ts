import { Box } from 'components/Box';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';

const LoginPage = () => {
  return (
    <Box as="main">
      <Container>
        <LoginForm />
      </Container>
    </Box>
  );
};

export default LoginPage;
