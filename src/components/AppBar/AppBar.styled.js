import styled from 'styled-components';

export const HeaderWrap = styled.header`
  width: 100%;
  max-height: 100px;
  background-color: ${p => p.theme.colors.background};
  margin-bottom: ${p => p.theme.space[5]}px;
  border-bottom: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  @media screen and (max-width: 768px) {
    max-height: 80px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
