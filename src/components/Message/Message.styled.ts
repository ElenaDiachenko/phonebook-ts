import styled from 'styled-components';

export const StyledMessage = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};

  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
