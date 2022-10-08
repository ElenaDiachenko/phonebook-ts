import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  max-width: 400px;
`;

export const CarouselWrap = styled.div`
  white-space: nowrap;
  transition: ease 1s;
`;

export const Card = styled.div`
  display: inline-block;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 20px 15px;
  align-items: flex-end;
`;

export const Title = styled.h3`
  color: white;
  font-size: 30px;
`;

export const Controls = styled.div``;

const Arrow = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
`;

export const ArrowLeft = styled(Arrow)`
  left: 0;
`;

export const ArrowRight = styled(Arrow)`
  right: 0;
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
  :active {
    background-color: steelblue;
  }
`;
