import styled from 'styled-components';

export const ButtonWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[2]}px;
  background-color: inherit;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),
      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
  }

  > svg {
    width: 25px;
    height: 25px;
  }
`;
