import { Box } from 'components/Box';
import { Message } from 'components/Message/Message';
import { Container } from 'components/Container/Container';
import { fetchImages } from 'servises/PixabayAPI';
import { useEffect, useState } from 'react';
import { Carousel } from 'components/Carousel/Carousel';

const HomePage = () => {
  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    (async () => {
      try {
        const sliderImages = await fetchImages('flowers');
        setImages([...sliderImages]);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Container>
      <Box display="flex" alignItems="center" gridGap={30}>
        <Box width="calc(60%)">
          {/* <img src={images[0].webformatURL} alt={images[0].tags} /> */}
          {images.length > 0 && <Carousel images={images} />}
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
