import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const AuthLink = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
