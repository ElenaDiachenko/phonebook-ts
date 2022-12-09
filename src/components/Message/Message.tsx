import { FC, ReactNode } from 'react';
import { StyledMessage } from './Message.styled';

interface IProps {
  children: ReactNode;
}
export const Message: FC<IProps> = ({ children }) => {
  return <StyledMessage>{children}</StyledMessage>;
};
