import { useEffect, useState } from 'react';
import { fetchImages } from 'servises/PixabayAPI';
import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';
import { Carousel } from 'components/Carousel/Carousel';
import { useCurrentMonth } from 'hooks/useCurrentMonth';

const HomePage = () => {
  const currentMonth = useCurrentMonth();
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const sliderImages = await fetchImages(`${currentMonth} nature`);
        setImages([...sliderImages]);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [currentMonth]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" gridGap={30}>
        <Box>
          <HomeTitle>
            Welcome to the PhoneBook app for saving personal phone contacts.
            <br />
            Please register to use.
          </HomeTitle>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          {images.length > 0 && <Carousel images={images} />}
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;

// box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
//     0 10px 10px rgba(255, 255, 255, 0.22);

// <Box display="flex" alignItems="center" gridGap={30}>
//   <Box width="calc(60%)">
//     {/* <img src={images[0].webformatURL} alt={images[0].tags} /> */}
//     {images.length > 0 && <Carousel images={images} />}
//   </Box>
//   <Box
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     flexGrow={1}
//   >
//     <Message>HELLO</Message>
//   </Box>
// </Box>
