import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
    transform: scale(1.03);
  }
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  @media screen and (max-width: 768px) {
    padding: ${p => p.theme.space[2]}px;
  }
`;
