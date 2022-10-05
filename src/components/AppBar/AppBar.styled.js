import styled from 'styled-components';

export const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  margin-bottom: ${p => p.theme.space[5]}px;
  border-bottom: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.secondary}`};

  @media screen and (max-width: 768px) {
    padding: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
