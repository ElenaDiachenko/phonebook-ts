import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1200px) {
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px;
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.medium};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
  &.active {
    color: ${p => p.theme.colors.secondary};
  }
`;
export const Logo = styled(NavLink)`
  padding: 8px;
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.medium};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
  &.active {
    color: ${p => p.theme.colors.secondary};
  }
`;
