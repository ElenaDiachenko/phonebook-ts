import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const AuthLink = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
  @media screen and (max-width: 768px) {
    padding: ${p => p.theme.space[2]}px;
  }
`;
