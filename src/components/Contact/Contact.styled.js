import styled from 'styled-components';

export const ContentWrap = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
  justify-content: flex-start;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ButtonstWrap = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px; ;
`;
export const ContactName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`;

export const ContactNumber = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
`;
