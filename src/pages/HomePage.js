import { useEffect, useState } from 'react';
import { fetchImages } from 'servises/PixabayAPI';
import { useDate } from 'hooks/useDate';
import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';
import { Carousel } from 'components/Carousel/Carousel';
import photo from 'images/photo.jpg';

const HomePage = () => {
  const { currentMonth } = useDate();
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
          {images.length > 0 ? (
            <Carousel images={images} title={currentMonth} />
          ) : (
            <img src={photo} alt="Phone" style={{ maxWidth: '100%' }} />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
