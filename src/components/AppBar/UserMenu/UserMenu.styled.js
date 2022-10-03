import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Nav = styled.div`
  display: flex;
  gap: ${p => p.theme.space[2]}px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  border-radius: ${p => p.theme.radii.sm};

  &:hover,
  :focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),
      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.sm};
  }
  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  }
`;

export const Content = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const User = styled.p`
  color: ${p => p.theme.colors.accent};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
