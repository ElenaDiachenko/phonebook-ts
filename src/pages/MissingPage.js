import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import { Message } from 'components/Message/Message';

const MissingPage = () => {
  return (
    <Box display="flex" flex-direction="column" gridGap={3}>
      <Message>Page Not Found</Message>
      <Box display="flex" alignItems="center" mr={10}>
        <Message>
          <Link to="/">Visit Our Homepage</Link>
        </Message>
      </Box>
    </Box>
  );
};

export default MissingPage;
