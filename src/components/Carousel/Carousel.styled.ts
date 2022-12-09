import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  max-width: 900px;
  border: ${p => `${p.theme.borders.normal} transparent`};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
    0 10px 10px rgba(255, 255, 255, 0.22);
`;

export const CarouselWrap = styled.div`
  white-space: nowrap;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Card = styled.div`
  display: inline-block;
  width: 100%;
  height: 75vh;

  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;

export const Image = styled.img`
  height: 100%;
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding-left: ${p => p.theme.space[4]}px;
  color: #f3f3f3;
  border: transparent;
  border-bottom-right-radius: ${p => p.theme.radii.sm};
  border-bottom-left-radius: ${p => p.theme.radii.sm};

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

const Arrows = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
  order: ${p => `${p.theme.borders.normal} transparent`};

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
  }
`;

export const ArrowLeft = styled(Arrows)`
  left: 0;
`;

export const ArrowRight = styled(Arrows)`
  right: 0;
`;
