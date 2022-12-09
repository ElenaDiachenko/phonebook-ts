import { FC } from 'react';
import { Title } from './HomeTitle.styled';

interface IProps {
  children: React.ReactElement;
}
export const HomeTitle: FC<IProps> = ({ children }) => {
  return <Title>{children}</Title>;
};
