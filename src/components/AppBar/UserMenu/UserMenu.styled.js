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

export const Content = styled.p`
  color: ${p => p.theme.colors.secondary};
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
