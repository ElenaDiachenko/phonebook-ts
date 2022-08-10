import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
