import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 17%;
  height: 40px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.accent}`};
  border-radius: ${p => p.theme.radii.sm};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.02);
    cursor: zoom-in;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;
