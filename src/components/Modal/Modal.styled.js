import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
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
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 30px;
  }
  @media screen and (min-width: 1440px) {
    padding: 50px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  color: black;
  font-family: inherit;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
