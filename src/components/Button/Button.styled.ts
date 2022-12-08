import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.secondary};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.accent}`};
  }

  > svg {
    width: 25px;
    height: 25px;

    @media screen and (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;
