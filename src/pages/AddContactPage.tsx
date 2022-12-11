import { useLocation } from 'react-router-dom';
import { ContactForm } from 'components/Forms/ContactForm';
import { Container } from 'components/Container/Container';
import { NavigateButton } from 'components/NavigateButton/NavigateButton';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Box } from 'components/Box';
import { Message } from 'components/Message/Message';
import { selectError } from 'redux/contacts/selectors';
import { useAppSelector } from 'redux/hooks';

const AddContactsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/contacts';
  const error = useAppSelector(selectError);

  return (
    <Container>
      <Box mb={16}>
        <NavigateButton path={backLinkHref}>
          <FaLongArrowAltLeft />
        </NavigateButton>
      </Box>
      {error ? (
        <Message>Something went wrong. Try again later</Message>
      ) : (
        <ContactForm />
      )}
    </Container>
  );
};

export default AddContactsPage;
