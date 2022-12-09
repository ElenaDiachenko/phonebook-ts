import { Box } from 'components/Box';
import { RegisterForm } from 'components/Forms/RegisterForm';
import { Container } from 'components/Container/Container';

const RegisterPage = () => {
  return (
    <Box as="main">
      <Container>
        <RegisterForm />
      </Container>
    </Box>
  );
};

export default RegisterPage;
