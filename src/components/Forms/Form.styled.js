import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Title = styled.h2`
  text-aligh: center;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-bottom: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    padding-bottom: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Message = styled(ErrorMessage)`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  outline: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};

  &:focus {
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.accent}`};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  width: 22%;
  height: 44px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.accent}`};
  border-radius: ${p => p.theme.radii.sm};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  &:hover,
  :focus {
    transform: scale(1.02);
    cursor: zoom-in;
  }

  &:active {
    background-color: ${p => p.theme.colors.primary};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.primary}`};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
