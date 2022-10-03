import { ButtonWrap } from './Button.styled';
export const Button = ({ children, buttonWidth }) => {
  return (
    <ButtonWrap style={{ width: Number(buttonWidth) }}>{children}</ButtonWrap>
  );
};
