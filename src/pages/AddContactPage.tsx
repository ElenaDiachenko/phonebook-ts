import { useLocation } from 'react-router-dom';
import { ContactForm } from 'components/Forms/ContactForm';
import { Container } from 'components/Container/Container';
import { NavigateButton } from 'components/NavigateButton/NavigateButton';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Box } from 'components/Box';

const AddContactsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/contacts';

  return (
    <Container>
        <Box mb={16}>
          <NavigateButton path={backLinkHref}>
            <FaLongArrowAltLeft />
          </NavigateButton>
        </Box>
        <ContactForm />
    </Container>
  );
};

export default AddContactsPage;
