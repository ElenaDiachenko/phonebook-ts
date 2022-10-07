import { MdOutlineContactPhone } from 'react-icons/md';
import { Box } from 'components/Box';
import { Message } from 'components/Message/Message';
import { Container } from 'components/Container/Container';
import { fetchImages } from 'servises/PixabayAPI';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      try {
        const sliderImages = await fetchImages('flowers');
        console.log(sliderImages);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Container>
      <Box display="flex" alignItems="center" gridGap={40}>
        <Box width="calc(50%)">
          <MdOutlineContactPhone
            style={{ width: '100%', height: 'auto', color: '#e5930e' }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Message>HELLO</Message>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;

// box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
//     0 10px 10px rgba(255, 255, 255, 0.22);
