import { useState, useEffect } from 'react';
import {
  StyledCarousel,
  CarouselWrap,
  Card,
  ArrowLeft,
  ArrowRight,
} from './Carousel.styled';

export const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    const index = current > 0 ? current - 1 : images.length - 1;
    setCurrent(index);
  };

  const next = () => {
    const index = current < images.length - 1 ? current + 1 : 0;
    setCurrent(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent(current => (current < images.length - 1 ? current + 1 : 0));
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <StyledCarousel>
      <CarouselWrap style={{ transform: `translateX(${-current * 100}%)` }}>
        {images.map((image, idx) => {
          return (
            <Card key={idx}>
              <img src={image.webformatURL} alt={image.tags} />
            </Card>
          );
        })}
      </CarouselWrap>
      <div>
        <ArrowLeft onClick={prev}>Prev</ArrowLeft>
        <ArrowRight onClick={next}>Next</ArrowRight>
      </div>
    </StyledCarousel>
  );
};
