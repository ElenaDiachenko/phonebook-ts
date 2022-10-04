import { ButtonWrap } from './Button.styled';
export const Button = ({ children, onClick }) => {
  return <ButtonWrap onClick={() => onClick()}>{children}</ButtonWrap>;
};
