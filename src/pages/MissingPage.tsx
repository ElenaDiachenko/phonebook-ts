import { Box } from 'components/Box';
import { Message } from 'components/Message/Message';
import { Container } from 'components/Container/Container';
import { NavigateButton } from 'components/NavigateButton/NavigateButton';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const MissingPage = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" gridGap={3}>
        <Message>Page Not Found. Go Home</Message>
        <NavigateButton path="/">
          <FaLongArrowAltLeft />
        </NavigateButton>
      </Box>
    </Container>
  );
};

export default MissingPage;
