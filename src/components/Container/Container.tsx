import { FC } from 'react';
import { PageContainer } from './Container.styled';

interface IProps {
  children: React.ReactElement;
}
export const Container: FC<IProps> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};
