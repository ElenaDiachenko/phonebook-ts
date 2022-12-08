import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 0;
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[5]}px;
  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  @media screen and (max-width: 768px) {
    padding: ${p => p.theme.space[3]}px;
    margin-top: ${p => p.theme.space[3]}px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
  }
`;
