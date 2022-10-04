import styled from 'styled-components';

export const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid black;
 margin-bottom: ${p => p.theme.space[5]}px;
  }
`;
