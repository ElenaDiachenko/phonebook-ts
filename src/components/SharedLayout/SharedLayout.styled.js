import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 ${p => p.theme.space[4]}px;
  max-width: 1440px;
  background-color: grey;

  margin: 0 auto;
`;
export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px 0;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: ${p => p.theme.space[4]}px;
  }
`;
