import { FC } from 'react';
import { StyledBtn } from './Button.styled';

interface IProps {
  children: React.ReactElement;
  onClick: () => void;
  type: 'button' | 'submit';
}

export const Button: FC<IProps> = ({ children, onClick, type }) => {
  return (
    <StyledBtn type={type} onClick={() => onClick()}>
      {children}
    </StyledBtn>
  );
};
