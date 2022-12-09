import { useEffect, useState } from 'react';
import { fetchImages } from 'servises/PixabayAPI';
import { useDate } from 'hooks/useDate';
import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';
import { Carousel } from 'components/Carousel/Carousel';
import photo from 'images/photo.jpg';
import { IImage } from 'interfaces/IImage';

const HomePage = () => {
  const { currentMonth } = useDate();
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const sliderImages = await fetchImages(`${currentMonth} nature`);
        setImages([...sliderImages]);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log('Unexpected error', err);
        }
      }
    })();
  }, [currentMonth]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" gridGap={30}>
        <Box>
          <HomeTitle>
            <Box display="flex" flexDirection="column" gridGap={14}>
              <p>
                Welcome to the PhoneBook app for saving personal phone contacts.
              </p>

              <p> Please register to use.</p>
            </Box>
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
