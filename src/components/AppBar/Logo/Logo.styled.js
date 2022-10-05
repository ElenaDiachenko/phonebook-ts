import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.bold};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
