import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  margin: ${p => p.theme.space[5]}px 0;
  padding-top: ${p => p.theme.space[5]}px;
  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  @media screen and (max-width: 768px) {
    padding-top: ${p => p.theme.space[4]}px;
    margin: ${p => p.theme.space[4]}px 0;
  }
`;

export const Input = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
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
