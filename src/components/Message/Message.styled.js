import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const MessageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
