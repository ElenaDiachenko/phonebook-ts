import {FC} from 'react';
import { StyledMessage } from './Message.styled';

interface IProps{
  children:React.ReactElement
}
export const Message:FC<IProps> = ({ children }) => {
  return <StyledMessage>{children}</StyledMessage>;
};

