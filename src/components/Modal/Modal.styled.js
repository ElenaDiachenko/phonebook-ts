import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(75, 65, 54, 0.04);
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;
export const ModalWindow = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: auto;

  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    width: 600px;
    padding: ${p => p.theme.space[4]}px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  color: ${p => p.theme.colors.background};
  background-color: inherit;

  font-family: inherit;
  border: none;
  cursor: pointer;

  &:hover,
  :focus > svg {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  > svg {
    width: 100%;
    height: 100%;
    color: inherit;
  }
`;
