import styled from 'styled-components';

export const TitleContact = styled.h2`
color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};

  @media screen and (max-width: 768px) {
  font-size: ${p => p.theme.fontSizes.m};
  }
}`;

export const ContactItem = styled.li`
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};
  border-radius: ${p => p.theme.radii.sm};
`;
