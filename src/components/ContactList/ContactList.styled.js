import styled from 'styled-components';

export const TitleContact = styled.h2`
color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
margin-bottom:${p => p.theme.space[5]}px;
 padding-top: ${p => p.theme.space[4]}px;
  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  @media screen and (max-width: 768px) {
    padding-top: ${p => p.theme.space[3]}px;
    margin: ${p => p.theme.space[4]}px 0;
  font-size: ${p => p.theme.fontSizes.m};
  }
}`;

export const ContactItem = styled.li`
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};
  border-radius: ${p => p.theme.radii.sm};
`;
