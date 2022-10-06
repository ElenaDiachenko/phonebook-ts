import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import { Message } from 'components/Message/Message';
import { Container } from 'components/Container/Container';

const MissingPage = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" gridGap={3}>
        <Message>Page Not Found</Message>
        <Message>
          <Link to="/">Visit Our Homepage</Link>
        </Message>
      </Box>
    </Container>
  );
};

export default MissingPage;
