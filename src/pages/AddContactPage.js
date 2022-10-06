import { useLocation } from 'react-router-dom';
import { ContactForm } from 'components/Forms/ContactForm';
import { Container } from 'components/Container/Container';
import { NavigateButton } from 'components/NavigateButton/NavigateButton';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const AddContactsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/contacts';

  return (
    <Container>
      <NavigateButton path={backLinkHref}>
        <FaLongArrowAltLeft />
      </NavigateButton>
      <ContactForm />
    </Container>
  );
};

export default AddContactsPage;
